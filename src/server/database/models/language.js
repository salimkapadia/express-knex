var baseModel = require('bookshelf').dbh;
var Language;

	Language = baseModel.Model.extend({
		tableName: 'language',
		hasTimestamps: false,

		// Relations
		users: function () {
			return this.belongsToMany('User');
		},
	});

module.exports = Language;
