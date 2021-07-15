const Villager = require('../models/villager')

let moveVillager = (req, res) => {
    res.render('addVillager')
}

let findOneVillager = (req, res) => {
    Villager.findOne({name: req.params.name}, (err, villager) => {
        console.log(villager)
        res.render('villagerDetail', {
            villager
        })
    })
}

let addVillager = (req, res) => {
    const villager = new Villager(req.body)
    villager.save((err) => {
        if (err) res.render("addVillager")
        res.redirect("/")
    })
}

let deleteVillager = (req, res) => {
    Villager.find({name: req.params.name}, (err, villager) => {
        Villager.deleteOne()
        .then(() =>{
            res.redirect("/")
        })
    })
}


module.exports = {
    moveVillager,
    findOneVillager,
    addVillager,
    deleteVillager,
}