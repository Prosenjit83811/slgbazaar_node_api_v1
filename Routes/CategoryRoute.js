const express = require('express');
const router = express.Router();
const CategoryController = require('../Controllers/Dashboard/Category/CategoryController');
const CategoryValidation = require('../Validations/CategoryValidation');

// router.post('/', CategoryValidation.category, CategoryController.store);
router.get('/', CategoryController.index);
router.get('/:id', CategoryController.show);
router.post('/', CategoryValidation.category, CategoryController.store);
router.put('/:id', CategoryValidation.category, CategoryController.update);
router.delete('/:id', CategoryController.delete);

module.exports = router;