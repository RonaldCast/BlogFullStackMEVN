/* eslint-disable */
'use strict'
const Movie = require('../models/Movie')
const Rating = require('../models/Rating')

module.exports.controller = (app) =>{

    //fetch all movie 
    app.get('/movies', (req, res) => {
       Movie.find({}, 'name description release_year genre', (err, movies ) =>{
        if(err)
            console.log(err)   
        res.send({movies})
       })
     })

    //add ane movie
    app.post('/movies', (req, res) => {
        const newMovie = new Movie({
            name: req.body.name,
            description: req.body.description,
            release_year: req.body.release_year,
            genre: req.body.genre
        })

       newMovie.save((error, movie) => {
            if(error){
                console.log(error)
            }
            res.send(movie)
        })
    })

    app.get('/api/movies/:id', (req, res) => {
        console.log("dsdsd")
        Movie.findById(
            req.params.id, 
            'name description release_year genre',
            (err, movie) =>{
                if(err)
                    console.log(err)
                res.send(movie);
            }
        )
    })

     // rate a movie
    app.post('/movies/rate/:id', (req, res) => {
        const newRating = new Rating({
            movieId: req.params.id,
            userId: req.body.userId,
            rate: req.body.rate
        })

        newRating.save((err, rating) => {
            if(err)
                console.log(err)
            
                res.send({
                    movieId: rating.movieId,
                    userId: rating.userId,
                    rate: rating.rate
                })
        })
    })
    

}










