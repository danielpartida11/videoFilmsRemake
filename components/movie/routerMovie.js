//------------------------------------------REQUIRES------------------------------------------------------------

const router = require('express').Router();
const controller = require('./servicesMovie');
module.exports = router;

//-------------------------------------------REQUIRES-----------------------------------------------------------

//-------------------------------------------CONTROLLERS--------------------------------------------------------
router.get('/peliculas', controller.getMovie);

router.post('/peliculas', controller.createMovie);

router.put('/peliculas', controller.updateMovie);

router.delete('/peliculas/:id', controller.deleteMovie);
//-------------------------------------------CONTROLLERS--------------------------------------------------------