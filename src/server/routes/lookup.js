var express = require('express');
var router = express.Router();
var lookupController = require('../controllers/lookupController');

/* GET lookups. */
router.get('/v1/lookup/alcohol', lookupController.getAlcoholTypes);
router.get('/v1/lookup/bodytype', lookupController.getBodyTypes);
router.get('/v1/lookup/career', lookupController.getCareerTypes);
router.get('/v1/lookup/country', lookupController.getCountryTypes);
router.get('/v1/lookup/diet', lookupController.getDietTypes);
router.get('/v1/lookup/drug', lookupController.getDrugTypes);
router.get('/v1/lookup/education', lookupController.getEducationTypes);
router.get('/v1/lookup/exercise', lookupController.getExerciseTypes);
router.get('/v1/lookup/language', lookupController.getLanguageTypes);
router.get('/v1/lookup/personality', lookupController.getPersonalityTypes);
router.get('/v1/lookup/smoke', lookupController.getSmokeTypes);
router.get('/v1/lookup/state', lookupController.getStateTypes);

module.exports = router;
