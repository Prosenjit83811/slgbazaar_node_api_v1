const express = require('express');
const router = express.Router();
const BookingController = require('../Controllers/Dashboard/Booking/BookingController');
const BookingValidation = require('../Validations/BookingValidation');

router.get('/', BookingController.index);
router.get('/:id', BookingController.show);
router.post('/', BookingValidation.booking, BookingController.store);
router.put('/:id', BookingValidation.booking, BookingController.update);
router.delete('/:id', BookingController.delete);

module.exports = router;