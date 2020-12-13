const { driverService } = require('../services')

const getDrivers = async (req, res) => {
    res.send(await driverService.load())
}

const createDriver = async (req, res) => {
    const driver = await driverService.insert(req.body)
  
    res.send(driver)
}

const deleteDriver = async (req, res) => {
    await driverService.removeBy('_id', req.params.driverId)
  
    res.send('OK')
}

const getYoungDrivers = async (req, res) => {
    const drivers = await driverService.findYoungDrivers()
  
    res.render('drivers', { drivers })
}

const getDriverById = async (req, res) => {
    const driver = await driverService.find(req.params.driverId)
    if (!driver) return res.status(404).send('Cannot find driver')
    res.render('driver', { driver })
}

const updateDriver = async (req, res) => {
    const { driverId } = req.params
    const { name } = req.body
  
    await driverService.update(driverId, { name })
}

module.exports = { getDrivers, createDriver, 
    deleteDriver, getYoungDrivers, getDriverById, updateDriver }