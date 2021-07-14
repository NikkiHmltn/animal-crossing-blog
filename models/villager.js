const mongoose = require('mongoose');
const Schema = mongoose.Schema

const villagerSchema = new Schema({
    name: {type: String, required: true},
    species: String, 
    birthday: String, 
    personality: String,
    img: String, 
})

module.exports = mongoose.model("Villager", villagerSchema)