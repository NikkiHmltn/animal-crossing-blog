const express = require('express')

const app = express()
const PORT = 8000;


app.listen(PORT || 8000, () => {
    console.log("Currenly playing 🎧 - KK Slider ")
})