const express = require('express')
const router = express.Router()
const villagerControl = require('../controllers/villager')

router.get("/movingin", villagerControl.moveVillager)
router.post("/", villagerControl.addVillager)
router.get("/:name", villagerControl.findOneVillager)
router.delete("/:name", villagerControl.deleteVillager)


module.exports = router;