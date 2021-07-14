const Villager = require('../models/villager')

let index = (req, res) => {
    Villager.find({}, villagers => {
        res.render('index', {
            villagers
        })
    })
}


module.exports = {
    index
} 