const { Router } = require('express')

const router = Router()
const { getAllVisits, postVisit } = require('../controllers/logEntry')

router.get('/getVisits', getAllVisits)
router.post('/postVisit', postVisit)
// router.delete("/deleteVisits",deleteVisits);
// router.update("/updateVisits",updateVisits);

module.exports = router
