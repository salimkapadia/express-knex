var baseModel = require('bookshelf').dbh;
var Smoke;

	Smoke = baseModel.Model.extend({
		tableName: 'smoke',
		hasTimestamps: false
	});

module.exports = Smoke;
