const Villager = require('../models/villager')

let findOneVillager = (req, res) => {
    Villager.findOne({name: req.params.name}, (err, villager) => {
        console.log(villager)
        res.render('villagerDetail', {
            villager
        })
    })
}


module.exports = {
    findOneVillager,
}