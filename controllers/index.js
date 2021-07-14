const Villager = require('../models/villager')

let index = (req, res) => {
    Villager.find({}, (err, villagers) => {
        res.render('index', {
            villagers
        })
    })
}


module.exports = {
    index
} 