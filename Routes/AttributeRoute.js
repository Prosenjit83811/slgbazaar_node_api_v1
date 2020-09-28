const express = require('express');
const router = express.Router();
const AttributeController = require('../Controllers/Dashboard/Attribute/AttributeController');
const AttributeValidation = require('../Validations/AttributeValidation');

router.get('/', AttributeController.index);
router.get('/:id', AttributeController.show);
router.post('/', AttributeValidation.attribute, AttributeController.store);
router.put('/:id', AttributeValidation.attribute, AttributeController.update);
router.delete('/:id', AttributeController.delete);

module.exports = router;