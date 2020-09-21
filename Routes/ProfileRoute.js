const express = require('express');
const router = express.Router();
const ProfileController = require('../Controllers/Dashboard/User/ProfileController');
// const LoginValidation = require('../Validations/LoginValidation');
const ProfileValidation = require('../Validations/ProfileValidation');
const ChangePasswordValidation = require('../Validations/ChangePasswordValidation');
const Policy = require('../RBAC');
const UserRBAC = require('../RBAC/UserRBAC');

router.get('/', ProfileController.index);
router.put('/', ProfileValidation.user, ProfileController.update);
router.put('/change-password', ChangePasswordValidation.user, ProfileController.changePassword);


module.exports = router;