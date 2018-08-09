let alcohol = require('../database/models/alcohol');
let bodytype = require('../database/models/bodytype');
let career = require('../database/models/career');
let country = require('../database/models/country');
let diet = require('../database/models/diet');
let drug = require('../database/models/drug');
let education = require('../database/models/education');
let exercise = require('../database/models/exercise');
let language = require('../database/models/language');
let personality = require('../database/models/personality');
let smoke = require('../database/models/smoke');
let state = require('../database/models/state');

/*
 * GET /book route to retrieve all the books.
 */
async function getAlcoholTypes(req, res, next) {
  //Query the DB, send all the types to the caller
  let results = await alcohol.fetchAll();
  //send results back to the client
  res.json(results);
}

/*
 * GET /book route to retrieve all the books.
 */
async function getBodyTypes(req, res, next) {
  //Query the DB, send all the types to the caller
  let results = await bodytype.fetchAll();
  //send results back to the client
  res.json(results);
}

/*
 * GET /book route to retrieve all the books.
 */
async function getCareerTypes(req, res, next) {
  //Query the DB, send all the types to the caller
  let results = await career.fetchAll();
  //send results back to the client
  res.json(results);
}

/*
 * GET /book route to retrieve all the books.
 */
async function getCountryTypes(req, res, next) {
  //Query the DB, send all the types to the caller
  let results = await country.fetchAll();
  //send results back to the client
  res.json(results);
}

/*
 * GET /book route to retrieve all the books.
 */
async function getDietTypes(req, res, next) {
  //Query the DB, send all the types to the caller
  let results = await diet.fetchAll();
  //send results back to the client
  res.json(results);
}

/*
 * GET /book route to retrieve all the books.
 */
async function getDrugTypes(req, res, next) {
  //Query the DB, send all the types to the caller
  let results = await drug.fetchAll();
  //send results back to the client
  res.json(results);
}

/*
 * GET /book route to retrieve all the books.
 */
async function getEducationTypes(req, res, next) {
  //Query the DB, send all the types to the caller
  let results = await education.fetchAll();
  //send results back to the client
  res.json(results);
}

/*
 * GET /book route to retrieve all the books.
 */
async function getExerciseTypes(req, res, next) {
  //Query the DB, send all the types to the caller
  let results = await exercise.fetchAll();
  //send results back to the client
  res.json(results);
}

/*
 * GET /book route to retrieve all the books.
 */
async function getLanguageTypes(req, res, next) {
  //Query the DB, send all the types to the caller
  let results = await language.fetchAll();
  //send results back to the client
  res.json(results);
}

/*
 * GET /book route to retrieve all the books.
 */
async function getPersonalityTypes(req, res, next) {
  //Query the DB, send all the types to the caller
  let results = await personality.fetchAll();
  //send results back to the client
  res.json(results);
}

/*
 * GET /book route to retrieve all the books.
 */
async function getSmokeTypes(req, res, next) {
  //Query the DB, send all the types to the caller
  let results = await smoke.fetchAll();
  //send results back to the client
  res.json(results);
}

/*
 * GET /book route to retrieve all the books.
 */
async function getStateTypes(req, res, next) {
  //Query the DB, send all the types to the caller
  let results = await state.fetchAll();
  //send results back to the client
  res.json(results);
}

//export all the functions
module.exports = {
  getAlcoholTypes, getBodyTypes, getCareerTypes, getCountryTypes,
  getDietTypes, getDrugTypes, getEducationTypes, getExerciseTypes,
  getLanguageTypes, getPersonalityTypes, getSmokeTypes, getStateTypes
};
