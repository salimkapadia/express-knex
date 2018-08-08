'use strict';

var _ = require('lodash');

function createTable(schema, tableName, knex) {
    return knex.schema.createTable(tableName, function (t) {
        var columnKeys = _.keys(schema[tableName]['columns']);
        _.each(columnKeys, function (columnName) {
            return addTableColumn(schema, tableName, knex, t, columnName);
        });
        if (schema[tableName].hasOwnProperty('comment')) {
          t.comment(schema[tableName]['comment']);
        }
        if (schema[tableName].hasOwnProperty('index')) {
          if (schema[tableName]['index'].hasOwnProperty('unique')){
            t.unique(schema[tableName]['index']['unique']);
          }
          if (schema[tableName]['index'].hasOwnProperty('primary')){
            t.primary(schema[tableName]['index']['primary']);
          }
        }
    });
}

function addTableColumn(schema, tableName, knex, table, columnName) {
	var column;
	var columnSpec = schema[tableName]['columns'][columnName];

	// creation distinguishes between text with fieldtype, string with maxlength and integer with fieldtype and all others
	if (columnSpec.type === 'text' && columnSpec.hasOwnProperty('fieldtype')) {
		column = table[columnSpec.type](columnName, columnSpec.fieldtype);
	} else if (columnSpec.type === 'string' && columnSpec.hasOwnProperty('maxlength')) {
		column = table[columnSpec.type](columnName, columnSpec.maxlength);
  } else if (columnSpec.type === 'integer' && columnSpec.hasOwnProperty('fieldtype')) {
		column = table['specificType'](columnName, columnSpec.fieldtype);
  } else if (columnSpec.type === 'decimal' && columnSpec.hasOwnProperty('maxlength') && columnSpec.hasOwnProperty('precison')) {
		column = table['decimal'](columnName, columnSpec.maxlength, columnSpec.precison);
  } else {
		column = table[columnSpec.type](columnName);
  }
	if (columnSpec.hasOwnProperty('nullable') && columnSpec.nullable === true) {
		column.nullable();
	} else {
		column.notNullable();
	}
	if (columnSpec.hasOwnProperty('primary') && columnSpec.primary === true) {
		column.primary();
	}
	if (columnSpec.hasOwnProperty('unique') && columnSpec.unique) {
		column.unique();
	}
	if (columnSpec.hasOwnProperty('unsigned') && columnSpec.unsigned) {
		column.unsigned();
	}
	if (columnSpec.hasOwnProperty('references')) {
		// check if table exists?
		column.references(columnSpec.references);
	}
	if (columnSpec.hasOwnProperty('defaultTo')) {
		column.defaultTo(columnSpec.defaultTo);
	}
	if (columnSpec.type === 'dateTime' && columnSpec.hasOwnProperty('nullable') && columnSpec.nullable === false) {
		column.defaultTo(knex.fn.now())
	}
  if (columnSpec.hasOwnProperty('comment')) {
		column.comment(columnSpec.comment);
	}
}

function deleteTable(tableName, knex) {
    return knex.schema.dropTableIfExists(tableName);
}

function populateTable(tableName, knex, data){
	return knex.insert(data).into(tableName);
}

function populateTables(tableNames, knex, fixtures){
	return _.map(tableNames, function (tableName) {
		if (fixtures.hasOwnProperty(tableName)){
			return populateTable(tableName, knex, fixtures[tableName]);
		}
	});
}

function loadTables(schema, tableNames, knex){
 	return _.map(tableNames, function (tableName) {
		return function(){
			return createTable(schema, tableName, knex);
		}
	});
}

function dropTables(tableNames, knex){
 	return _.map(tableNames, function (tableName) {
		return function(){
			return deleteTable(tableName, knex);
		}
	});
}

module.exports = {
    populateTables: populateTables,
    loadTables : loadTables,
    dropTables: dropTables
};
