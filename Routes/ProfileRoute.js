const express = require('express');
const router = express.Router();
const ProfileController = require('../Controllers/Dashboard/User/ProfileController');
// const LoginValidation = require('../Validations/LoginValidation');
const ProfileValidation = require('../Validations/ProfileValidation');
const AddressController = require('../Controllers/Dashboard/User/AddressController');
const AddressValidation = require('../Validations/AddressValidation');
const ChangePasswordValidation = require('../Validations/ChangePasswordValidation');
const Policy = require('../RBAC');
const UserRBAC = require('../RBAC/UserRBAC');

router.get('/', ProfileController.index);
router.put('/', ProfileValidation.user, ProfileController.update);
// router.put('/address', AddressValidation.address, AddressController.store);
router.put('/change-password', ChangePasswordValidation.user, ProfileController.changePassword);
router.get('/address', AddressValidation.address, AddressController.index);
router.get('/address/:id', AddressValidation.address, AddressController.show);
router.put('/address/:id', AddressValidation.address, AddressController.update);
router.delete('/address/:id', AddressValidation.address, AddressController.delete);
router.post('/address', AddressValidation.address, AddressController.store);

module.exports = router;