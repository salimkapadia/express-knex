'use strict';

var _ = require('lodash');
var schema = require("../schema/base");
var fixtures = require("../fixtures/base");
var migrationHelper = require("../../utils/migrationHelper");
var sequence = require('../../utils/sequence');

exports.up = function(knex, Promise) {
	var tables = [];
	var tableSequence;
	var tableNames = _.keys(schema);

	tables = migrationHelper.loadTables(schema, tableNames, knex);
	tableSequence = sequence(tables);

	return tableSequence.then(function () {
		console.log('Base DB structure with data set created successfully.');
		return Promise.all(migrationHelper.populateTables(tableNames, knex, fixtures));
  });
};

exports.down = function(knex, Promise) {
	var tables = [];
	var tableSequence;
	var tableNames = _.keys(schema).reverse();

	tables = migrationHelper.dropTables(tableNames, knex);
	tableSequence = sequence(tables);

	return tableSequence.then(function () {
		console.log('DB cleanup successful');
  });
};
