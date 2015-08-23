var express = require('express')
var body = require('body-parser')

var app = express()

app.use(body.urlencoded({ extended: false }))

app.post('/form', function(req, res) {
    res.end(req.body.str.split('').reverse().join(''))
})

app.listen(process.argv[2])
