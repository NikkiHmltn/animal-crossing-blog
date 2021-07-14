const mongoose = require('mongoose')
const db = mongoose.connection

mongoose.connect('mongodb://localhost/villagers',{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

db.on('connected', () => {
    console.log(`Sending you those groovy vibes from ${db.host}:${db.port}`)
})