var devip = require('dev-ip')
var express = require('express')
var port = process.env.PORT || 3000
var app = express()
app.use(express.static('site'))
app.listen(port, function () {
  console.log(`Server started on http://${devip()}:${port}.`)
})
