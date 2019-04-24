const mongoose = require('mongoose')
const Schema = mongoose.Schema;

// creacion de l schema
const UserSchema = new Schema({
    name:{
        type: String,
        required: [true, "Error al ingresar el nombre debe de establecerser"]
    }, 
    email:{
        type: String,
        required: [true, "Error al ingresar el email debe de establecerse"],
        validate:{
            validator: (v) => {
                return /[a-z0-9]{1,}@[a-z0-9]\.[a-z]{2,5}/.test(v)
            },
            message: '{VALUE} is not valid'
        }
    }   
});
//para crear el modelo en si, con el esquema de mongoose. 
const User =  mongoose.model("User", UserSchema)
module.exports = User


