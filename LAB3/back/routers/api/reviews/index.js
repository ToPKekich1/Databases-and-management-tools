const router = require('express').Router();
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: false }));
const Reviews = require('../../../controllers/reviewsControllers/controllers');

router.get('/reviews', Reviews.reviewsList); //get Reviews
router.post('/reviews', Reviews.addReview); //add Reviews
router.delete('/reviews/:id', Reviews.deleteReview); //delete Reviews
router.post('/reviews/find', Reviews.findReviews); //find Reviews

module.exports = router;
