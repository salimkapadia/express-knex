var baseModel = require('bookshelf').dbh;
var Personality;

	Personality = baseModel.Model.extend({
		tableName: 'personality',
		hasTimestamps: false
	});

module.exports = Personality;
