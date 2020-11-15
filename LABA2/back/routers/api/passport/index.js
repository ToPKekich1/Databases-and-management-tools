const router = require('express').Router();
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: false }));
const Passports = require('../../../controllers/passportsControllers/controllers');

router.get('/passports', Passports.passportList); //get passports
router.post('/passports', Passports.addPassport); //add passport
router.put('/passports/:id', Passports.editPassport); //update passport
router.delete('/passports/:id', Passports.deletePassport); //delete passport
router.post('/passports/find', Passports.findPassports); //find passports

module.exports = router;
