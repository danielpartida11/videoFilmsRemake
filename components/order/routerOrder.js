const router = require('express').Router();
const controller = require('./servicesOrder');

router.get('/pedidos', controller.getOrder);

router.post('/pedidos', controller.createOrder);

router.put('/pedidos', controller.updateOrder);

router.delete('/pedidos/:id', controller.deleteOrder);