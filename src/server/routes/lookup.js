var express = require('express');
var router = express.Router();
var lookupController = require('../controllers/lookupController');

/* GET lookups. */
router.get('/alcohol', lookupController.getAlcoholTypes);
router.get('/body', lookupController.getBodyTypes);
router.get('/career', lookupController.getCareerTypes);
router.get('/country', lookupController.getCountryTypes);
router.get('/diet', lookupController.getDietTypes);
router.get('/drug', lookupController.getDrugTypes);
router.get('/education', lookupController.getEducationTypes);
router.get('/exercise', lookupController.getExerciseTypes);
router.get('/language', lookupController.getLanguageTypes);
router.get('/personality', lookupController.getPersonalityTypes);
router.get('/smoke', lookupController.getSmokeTypes);

module.exports = router;
