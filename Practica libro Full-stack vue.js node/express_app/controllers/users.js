const User = require('../Models/User')

module.exports.controller = (app) => {
    app.get('/users', async (req, res) => {

        // actualizando documento


        /*User.findOneAndUpdate({
            _id: '5cbfa4887e494419e07f3b52'
        }, 
        {$set:{name: 'Sandra'}}, (err, user) =>{
            if(err)
            console.log(err)

            res.send(user)
        })*/


        // buscar todos los usuario 
        /*await User.find({}, 'name email',  (err, users) =>{
            if(err)
            console.log(err)

            res.send({
                users: users
            })
        } )*/

        //crea usuario

        const user_r = new User({
            name: "Moli",
            email: 'petronilado@ecom'
        })

        user_r.save((error, user) => {
            if (error)
                res.send(error.errors.email.message)
            res.send(user)
        })
        //res.send("ehel")
        /*res.render('users', {
            title: 'Users',
            description: 'This is the description of all users'
        })*/
    })
}