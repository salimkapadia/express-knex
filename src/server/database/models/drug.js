var baseModel = require('bookshelf').dbh;
var Drug;

	Drug = baseModel.Model.extend({
		tableName: 'drug',
		hasTimestamps: false
	});

module.exports = Drug;
