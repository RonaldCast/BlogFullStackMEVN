
'use strict'

var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/express_ap', {
        useNewUrlParser:  true
    })
    .then(db => console.log("DB is connected"))
    .catch((err) => {
        console.log(`app starting error: ${err.stack}`);
        process.exit(1)
    })

module.exports = mongoose;