const express = require('express');
const router = express.Router();
const LoginController = require('.././Controllers/Auth/LoginController');
const LoginValidation = require('.././Validations/LoginValidation');

router.post('/login', LoginValidation.login, LoginController.login);
router.post('/complete-login', LoginValidation.login, LoginController.completeLogin);

module.exports = router;