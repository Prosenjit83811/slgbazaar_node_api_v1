const express = require('express');
const router = express.Router();
const ProfileController = require('../Controllers/User/ProfileController');
// const LoginValidation = require('../Validations/LoginValidation');

router.get('/', ProfileController.index);

module.exports = router;