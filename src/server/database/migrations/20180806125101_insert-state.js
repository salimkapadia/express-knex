'use strict';

var _ = require('lodash');
var schema = require("../schema/base");
var fixtureData = require("../fixtures/state");
var data = [];

function getCountry(knex,name){
  return knex.select('id','name').where({name: name}).from('country');
}

function populateState(knex, Promise){
  var states = [];
  return Promise.map(fixtureData, function(item) {
    return Promise.join( getCountry(knex, item.country), function(country){
			states.push(
				knex.insert(
					{
						country_id: country[0].id,
						name: item.state
					}, 'id').into('state')
			);
    })
}).then(function(){
  return Promise.all(states);
}).then(function(result){
  console.log('Imported states for each country successfully');
})
}

exports.up = function(knex, Promise) {
  return populateState(knex, Promise)
};

exports.down = function(knex, Promise) {

};
