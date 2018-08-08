var baseModel = require('bookshelf').dbh;
var Country;

	Country = baseModel.Model.extend({
		tableName: 'country',
		hasTimestamps: false,

		states : function (){
			return this.hasMany('State', 'country_id');
		}
	},{
	findByCountryCode : async function(code) {
		if (code.length == 3){
			return await this.forge({code_3:code}).fetch();
		}
		else if (code.length == 2){
			return await this.forge({code_2:code}).fetch();
		}
		else { // not possible to be here.
			return new Error('Invalid Country Code');
		}
	}
});

// module.exports = baseModel.model('Country', Country);
module.exports = Country;
