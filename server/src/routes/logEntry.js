const { Router } = require("express");
const router = Router();
const LogEntry = require("../models/logEntry.js");
const { getAllVisits, postVisit } = require("../controllers/logEntry");
router.get("/", getAllVisits);

router.post("/", postVisit);

module.exports = router;
