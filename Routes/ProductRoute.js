const express = require('express');
const router = express.Router();
const ProductController = require('../Controllers/Dashboard/Product/ProductController');
const ProductValidation = require('../Validations/ProductValidation');
// const CategoryValidation = require('../Validations/CategoryValidation');


// router.post('/', CategoryValidation.category, CategoryController.store);
router.get('/', ProductController.index);
router.get('/:id', ProductController.show);
router.post('/',  ProductValidation.product, ProductController.store);
router.put('/:id', ProductValidation.product, ProductController.update);
router.delete('/:id', ProductController.delete);

module.exports = router;