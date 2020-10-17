const express = require('express');
const router = express.Router();
const BrandController = require('../Controllers/Dashboard/Product/BrandController');
const BrandValidation = require('../Validations/BrandValidation');

router.get('/', BrandController.index);
router.get('/:id', BrandController.show);
router.post('/', BrandValidation.category, BrandController.store);
router.put('/:id', BrandValidation.category, BrandController.update);
router.delete('/:id/product/:productId', BrandController.delete);

module.exports = router;