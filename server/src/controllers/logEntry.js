const LogEntry = require('../models/logEntry')

// GET Request
exports.getAllVisits = async (req, res, next) => {
  try {
    const entries = await LogEntry.find()
    res.json(entries)
  } catch (error) {
    next(error)
  }
}

// POST request
exports.postVisit = async (req, res, next) => {
  try {
    const logEntry = new LogEntry(req.body)
    const createdEntry = await logEntry.save()
    res.json(createdEntry)
    await logEntry.save()
  } catch (error) {
    if (error.name === 'Validation Error') {
      res.status(422)
    }
    next(error)
  }
}

// DELETE request
// exports.deleteVists = ()=>{

// }

// PUT(UPDATE) request

// exports.updateVisits = ()=>{

// }

// exports.deleteVists = ()=>{

// }
