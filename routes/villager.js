const express = require('express')
const router = express.Router()
const villagerControl = require('../controllers/villager')

router.get("/:name", villagerControl.findOneVillager)

module.exports = router;