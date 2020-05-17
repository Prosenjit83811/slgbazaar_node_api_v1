const express = require('express');
const router = express.Router();
const UserController = require('../Controllers/User/UserController');
const UserValidation = require('../Validations/UserValidation');

router.post('/', UserValidation.user, UserController.store);

module.exports = router;