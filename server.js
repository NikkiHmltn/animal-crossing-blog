const express = require('express')
const methodOverride = require('method-override')

const app = express()
const PORT = 8000;
require('./config/database')

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended:false }))
app.use(methodOverride('_method'))

const indexRouter = require('./routes/index')
const villagerRouter = require('./routes/villager')

app.use('/', indexRouter)
app.use("/villager", villagerRouter)

app.listen(PORT || 8000, () => {
    console.log("Currenly playing 🎧 - KK Slider ")
})