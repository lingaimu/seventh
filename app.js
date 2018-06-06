const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('<h1>Hello World!!!!</h1>   <dev>这个世界真的很疯狂</dev >')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})