
const { getBookings, searchBookings }  = require('../controllers/bookings')

const router = require('express').Router()

router.get('/', getBookings)

router.get('/search', searchBookings)

module.exports = router
