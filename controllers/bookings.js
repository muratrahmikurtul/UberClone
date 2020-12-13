const { bookingService } = require('../services')

const getBookings = async (req, res) => {
    res.send(await bookingService.load())
}

const searchBookings = async (req, res) => {
    const origin = req.query.origin
    const destination = req.query.destination
  
    const query = {}
  
    if (origin) query.origin = origin
    if (destination) query.destination = destination
  
    res.render(await bookingService.query(query))
  }

module.exports = { getBookings, searchBookings } 