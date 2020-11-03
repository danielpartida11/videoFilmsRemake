const router = require('express').Router();
const controller = require('./servicesUser');
module.exports = router;

router.get('/usuarios', controller.getUser);

router.post('/usuarios', controller.createUser);

router.put('/usuarios', controller.updateUser);

router.delete('/usuarios/:id', controller.deleteUser);