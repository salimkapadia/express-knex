var baseModel = require('bookshelf').dbh;
var Bodytype;

	Bodytype = baseModel.Model.extend({
		tableName: 'bodytype',
		hasTimestamps: false
	});

// module.exports = baseModel.model('Bodytype', Bodytype);
module.exports = Bodytype;
