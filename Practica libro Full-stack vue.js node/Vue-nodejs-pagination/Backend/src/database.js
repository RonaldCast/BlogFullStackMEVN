const mongoose = require('mongoose')

//poniendo la cadena de conection
mongoose.connect('mongodb://localhost/node-vue',{
    useNewUrlParser: true
})
.then(db => console.log("DB is connected"))
.catch(err => console.log(err)) 