/* eslint-disable */

const User = require("../models/User");

// configuracion para que el usuario inicie sesion

const passwordJWT = require('passport-jwt')
const jwt = require('jsonwebtoken')

const ExtractJwt = passwordJWT.ExtractJwt;
const jwtOptions = {};
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('jwt')
jwtOptions.secreteOrKey = 'thisisthesecretkey'

module.exports.controller = (app) => {
app.post('/users/registre', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    
    const newUser = new User({
        name,
        email,
        password
    });

    User.createUser(newUser, (error, user) => {
        if (error){
            // para monstrar un mensaje segun la respuesta del servidor
            res.status(422).json({
                messaje: 'Something went wrong. please try again after some'
            })
         
        }
        res.send({user});
    })
})

//login a user 

    app.post('/users/login', (req, res) => {
        if(req.body.email && req.body.password){
            const password = req.body.password
            const email = req.body.email
            User.getUserByEmail(email, (err, user) =>{
                if(!user){
                    res.status(404).json({
                        message: 'The user does not exist!'
                    })
                }else{
                    User.comparePassword(password, user.password, (error, isMatch) =>{
                        if(error) throw error
                        if(isMatch){
                            const payload =  {id: user.id}
                            const token = jwt.sign(payload, jwtOptions.secreteOrKey)
                            res.json({message: 'ok', token});

                        }else{
                            res.status(401).json({message: 'The password is incorrect!'})
                        }
                    })
                }
            })
        }
    })

}

















