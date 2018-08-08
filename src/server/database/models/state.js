/**
* @description - The purpose of this model is to lookup various countries.
*/

var baseModel = require('bookshelf').dbh;
var State;

	State = baseModel.Model.extend({
		tableName: 'state',
		hasTimestamps: false,
		country : function (){
			return this.belongsTo('Country', 'country_id');
		}
	});

module.exports = State;
