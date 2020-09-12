const express = require('express');
const router = express.Router();
const UserController = require('../Controllers/Dashboard/User/UserController');
const UserValidation = require('../Validations/UserValidation');
const AddressController = require('../Controllers/Dashboard/User/AddressController');
const AddressValidation = require('../Validations/AddressValidation');
const Policy = require('express-policies');
const UserPolicie = require('../Policies/UserPolicy');

router.get('/', UserController.index);
router.get('/:userId', UserController.show);
router.post('/', Policy(UserPolicie), UserValidation.user, UserController.store);
router.put('/:userId', UserValidation.user, UserController.update);
router.delete('/:userId', UserController.delete);
router.post('/:userId/address', AddressValidation.address, AddressController.store);

module.exports = router;