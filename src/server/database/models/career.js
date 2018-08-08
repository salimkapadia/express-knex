var baseModel = require('bookshelf').dbh;
var Career;

	Career = baseModel.Model.extend({
		tableName: 'career',
		hasTimestamps: false
	});

// module.exports = baseModel.model('Career', Career);
module.exports = Career;
