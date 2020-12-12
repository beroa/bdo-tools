const express = require('express')

var app = express()

var routesAPI = require('./routes/index')
app.use('/marketplace', routesAPI);

const PORT = process.env.PORT || '3000'
app.listen(PORT, console.log(`Listening on port ${PORT}`))