const { response } = require('express');
const model = require('../models/movie');

class MoviesController{

    list(req, res){
        model.find().then(response => {
            res.send(response);
          }).catch(e => {
            res.sendStatus(500);
        });
    }

    create(req, res){

      console.log(req.body);
      
      const { name, synopsis, genre, duration, director, actors} = req.body;

      model.create({
          name,
          synopsis,
          genre,
          duration,
          director,
          actors
      })
      .then(newMovie => {
          console.log('New movie created:', newMovie);
          res.status(201).json({ message: 'Movie created successfully', movie: newMovie });
      })
      .catch(error => {
          console.error('Error creating movie:', error);
          res.status(500).json({ error: 'An error occurred while creating the movie' });
      });
    }
}

module.exports = new MoviesController();