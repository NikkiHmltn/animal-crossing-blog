const express = require('express')

const app = express()
const PORT = 8000;
require('./config/database')

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended:false }))

const indexRouter = require('./routes/index')

app.use('/', indexRouter)

app.listen(PORT || 8000, () => {
    console.log("Currenly playing 🎧 - KK Slider ")
})