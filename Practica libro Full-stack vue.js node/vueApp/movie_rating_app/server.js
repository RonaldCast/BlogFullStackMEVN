/* eslint-disable */
const express = require('express');
//jsonwebtoken, passport y
const jwt = require('jsonwebtoken');
const passport = require('passport');
const passportJWT = require('passport-jwt');

const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const fs = require('fs');
const app = express();
const router = express.Router();

//configuracion de la extrategia 
//Necesitaremos JwtStrategy de passport.js, y ExtractJwT
// se usará para extraer los datos de carga útil en el token jwt
const ExtractJwt = passportJWT.ExtractJwt;
const JwtStrategy = passportJWT.Strategy;
const jwtOptions = {};
//para establcer la configuracion de autentificacion
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('jwt');
jwtOptions.secreteOrKey = 'movieratingapplicationsecretkey'




app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());
//usando passport inicializado 
app.use(passport.initialize());

mongoose.connect('mongodb://localhost/movie_rating_app', {
    useNewUrlParser: true
})
 .then(db => console.log("DB is connected"))
.catch(err => {
    console.error('App starting error:', err.stack);
    process.exit(1);
})



//include controllers
fs.readdirSync("controllers").forEach(function(file){
    if(file.substr(-3) == ".js"){
        const route = require("./controllers/" + file)
        route.controller(app)
    }
})


router.get('/', (req, res) =>{
    res.json( {message: 'API Initalized'} );
});

const port = process.env.API_PORT || 8082;
app.use('/', router);
app.listen(port, function() {
    console.log(`api running on port ${port}`, "http://localhost:8082")
})
