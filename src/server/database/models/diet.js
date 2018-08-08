var baseModel = require('bookshelf').dbh;
var Diet;

	Diet = baseModel.Model.extend({
		tableName: 'diet',
		hasTimestamps: false
	});

module.exports = Diet;
