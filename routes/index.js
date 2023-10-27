const router = require('express').Router();
const moviesController = require('../src/controllers/movies');

router.get('/movies', moviesController.list); 
router.post('/movies', moviesController.create);

module.exports = router;