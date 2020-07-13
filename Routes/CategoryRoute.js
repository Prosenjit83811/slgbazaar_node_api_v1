const express = require('express');
const router = express.Router();
const CategoryController = require('../Controllers/Dashboard/Category/CategoryController');
// const CategoryValidation = require('../Validations/CategoryValidation');


// router.post('/', CategoryValidation.category, CategoryController.store);
router.get('/', CategoryController.index);

module.exports = router;