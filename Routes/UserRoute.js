const express = require('express');
const router = express.Router();
const UserController = require('../Controllers/User/UserController');
const UserValidation = require('../Validations/UserValidation');
const AddressController = require('../Controllers/User/AddressController');
const AddressValidation = require('../Validations/AddressValidation');


router.post('/', UserValidation.user, UserController.store);
router.post('/:userId/address', AddressValidation.address, AddressController.store);

module.exports = router;