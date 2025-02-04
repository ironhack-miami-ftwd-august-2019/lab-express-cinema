const express = require('express');
const router  = express.Router();
const Movie   = require('../models/Movie')
/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index.hbs');
});

router.get('/movies', (req, res, next)=>{
  Movie.find({}).then(allTheMoviesFromTheDB => { //found all the movies in the database

    res.render('movies.hbs', {moviesToHBS: allTheMoviesFromTheDB}) //redner 

  }).catch(err=>console.error(err))
})


//http://localhost:3000/info/5d7ba1db0fcafe6a0f96ab04

// router.get('/info/:id', (req, res ,next)=> {
//   let id = req.params.id; 

//   Movie.findById(id).then(theSingleMovie => {
    
//     res.render('movie', {movie:theSingleMovie})

//   }).catch(err=>console.error(err))

// })



router.get('/info/:id', async (req, res ,next)=> {
  let id = req.params.id; 
  let movie = await Movie.findById(id)
  res.render('movie', { movie })

})


module.exports = router;
