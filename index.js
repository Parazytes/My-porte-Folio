const express = require('express')
const app = express()
const router= require('./app/router')
require('dotenv').config()

const PORT = process.env.PORT

app.set('view engine', 'ejs');
app.set('views', 'app/views');



app.use(express.static('./public'));



app.use(router)

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})