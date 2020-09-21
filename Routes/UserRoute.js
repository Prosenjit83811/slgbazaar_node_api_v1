const express = require('express');
const router = express.Router();
const UserController = require('../Controllers/Dashboard/User/UserController');
const UserValidation = require('../Validations/UserValidation');
const AddressController = require('../Controllers/Dashboard/User/AddressController');
const AddressValidation = require('../Validations/AddressValidation');
// const Policy = require('express-policies');
const Policy = require('../RBAC');
const UserRBAC = require('../RBAC/UserRBAC');
// const UserPolicie = require('../Policies/UserPolicy');

router.get('/', UserController.index);
router.get('/:userId', UserController.show);
router.post('/', Policy(UserRBAC, 'create'), UserValidation.user, UserController.store);
router.put('/:userId',  Policy(UserRBAC, 'update'), UserValidation.user, UserController.update);
router.delete('/:userId', UserController.delete);
router.get('/:userId/address', AddressValidation.address, AddressController.index);
router.get('/:userId/address/:id', AddressValidation.address, AddressController.show);
router.put('/:userId/address/:id', AddressValidation.address, AddressController.update);
router.delete('/:userId/address/:id', AddressValidation.address, AddressController.delete);
router.post('/:userId/address', AddressValidation.address, AddressController.store);

module.exports = router;