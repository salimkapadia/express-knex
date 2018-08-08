var baseModel = require('bookshelf').dbh;
var Exercise;

	Exercise = baseModel.Model.extend({
		tableName: 'exercise',
		hasTimestamps: false
	});

module.exports = Exercise;
