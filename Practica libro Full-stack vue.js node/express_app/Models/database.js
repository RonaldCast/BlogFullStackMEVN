
'use strict'

var mongoose = require('mongoose')
var chalk = require('chalk')

mongoose.connect('mongodb://localhost/express_ap', {
        useNewUrlParser:  true
    })
    .then(db => console.log((chalk.rgb(189, 250, 20)("DB is connected"))))
    .catch((err) => {
        console.log(`app starting error: ${err.stack}`);
        process.exit(1)
    })

module.exports = mongoose;