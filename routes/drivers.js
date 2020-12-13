const { getDrivers, createDriver, deleteDriver,
   getYoungDrivers, getDriverById, updateDriver } = require('../controllers/drivers')
const router = require('express').Router()

router.get('/', getDrivers)

router.post('/', createDriver)

router.delete('/:driverId', deleteDriver)

router.get('/young-drivers', getYoungDrivers)

router.get('/:driverId', getDriverById)

router.patch('/:driverId', updateDriver)

module.exports = router
