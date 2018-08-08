var baseModel = require('bookshelf').dbh;
var Alcohol;

	Alcohol = baseModel.Model.extend({
		tableName: 'alcohol',
		hasTimestamps: false
	});

// module.exports = baseModel.model('Alcohol', Alcohol);
module.exports = Alcohol;
