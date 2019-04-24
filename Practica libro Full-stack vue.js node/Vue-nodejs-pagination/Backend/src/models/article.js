 const {Schema, model} = require('mongoose'); // solo requiere una parte del modelo 

// nos permite definir los datos que tendra el objecto
const ArticleSchema = new Schema({
    title: String,
    description: String,
    imageURL: String
})

//para que funcione 
module.exports =  model("Article", ArticleSchema);