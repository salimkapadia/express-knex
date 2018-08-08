var knex = Bookshelf = null;

module.exports.init = function (options) {
	knex = require('knex')(options); //pass in db config options.
	Bookshelf = require('bookshelf');
	Bookshelf.dbh = Bookshelf(knex); // Initializes a new Bookshelf instance
}
