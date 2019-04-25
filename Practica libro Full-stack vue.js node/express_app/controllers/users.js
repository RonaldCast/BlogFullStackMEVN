const User = require('../Models/User')

module.exports.controller = (app) => {
    //get all user
    app.get('/users', async (req, res) => {
        User.find({}, 'name email', (err, users) => {
            if (err) {
                console.log(err)
            }
            res.send(users)
        })
    })

    app.get('/users/:id', (req, res) => {
        User.findById(req.params.id, 'name email', (err, user) => {
            if (err)
                console.log(err)
            res.send(user)

        })

    })

    // add user 
    app.post('/users', (req, res) => {
        const user = new User({
            name: req.body.name,
            email: req.body.email
        })
        console.log("ddd")
        user.save((err, user) => {
            if (err) {
                console.log(err)
            }

            res.send(user)

        })
    })

    //update user
    app.put('/users/:id', (req, res) => {

        User.findById(req.params.id, 'name email', (err, user) => {
            user.name = req.body.name;
            user.email = req.body.email

            user.save((err, user) => {
                if (err)
                    console.log(chalk.red(err))
                res.send(user)
            })
        })
    })

    //delete user

    app.delete('/users/:id', (req, res) => {
        User.remove({
                _id: req.params.id
            }, (err, user) => {
                if (err)
                    console.log(err)
                res.send({
                    success: true
                })
            }

        )
    })
}



//*************************************** */

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

/*const user_r = new User({
    name: "Moli",
    email: 'petronilado@ecom'
})

user_r.save((error, user) => {
    if (error)
        res.send(error.errors.email.message)
    res.send(user)
})*/
//res.send("ehel")
/*res.render('users', {
    title: 'Users',
    description: 'This is the description of all users'
})*/