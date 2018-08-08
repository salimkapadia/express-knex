var baseModel = require('bookshelf').dbh;
var Education;

	Education = baseModel.Model.extend({
		tableName: 'education',
		hasTimestamps: false
	});

module.exports = Education;
