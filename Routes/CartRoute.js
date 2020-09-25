const express = require('express');
const router = express.Router();
const CartController = require('../Controllers/Dashboard/Booking/CartController');
const CartValidation = require('../Validations/CartValidation');

router.get('/', CartController.index);
router.get('/:id', CartController.show);
router.post('/', CartValidation.category, CartController.store);
// router.put('/:id', CartValidation.category, CartController.update);
router.delete('/:id/product/:productId', CartController.delete);

module.exports = router;