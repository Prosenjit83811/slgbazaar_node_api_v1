const express = require('express');
const router = express.Router();
const ProfileController = require('../Controllers/Dashboard/User/ProfileController');
// const LoginValidation = require('../Validations/LoginValidation');
const ChangePasswordValidation = require('../Validations/ChangePasswordValidation');


router.get('/', ProfileController.index);
router.put('/change-password', ChangePasswordValidation.user, ProfileController.changePassword);


module.exports = router;