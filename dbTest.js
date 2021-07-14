const mongoose = require('mongoose')
require('./models/villager')
let Villager = mongoose.model('Villager')

const db = mongoose.connection

mongoose.connect('mongodb://localhost/villagers',{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

db.on('connected', () => {
    console.log(`Sending you those groovy vibes from ${db.host}:${db.port}`)
})

const villagerRory = new Villager({
    name: "Rory",
    species: "Lion",
    birthday: "August 7th",
    personality: "Jock",
    img: "https://static.wikia.nocookie.net/animalcrossing/images/d/db/Rory_NH.png/revision/latest/scale-to-width-down/301?cb=20200803113959"
})

const villagerPashmina = new Villager({
    name: "Pashmina",
    species: "Goat",
    birthday: "December 26th",
    personality: "Uchi",
    img: "https://static.wikia.nocookie.net/animalcrossing/images/3/3e/Pashmina_NH.png/revision/latest/scale-to-width-down/329?cb=20200802145815"
})

villagerRory.save((err) => {
    if(err) console.log(err) 
    else console.log("Rory saved!")
})

villagerPashmina.save((err) => {
    if(err) console.log(err) 
    else console.log("Rory saved!")
})