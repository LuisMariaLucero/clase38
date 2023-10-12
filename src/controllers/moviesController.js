const movieService = require("../services/movie-service");

module.exports = {
  list: (req, res) => {
    movieService.getAllMovies().then((movies) => {
      res.render("moviesList", { movies });
    });
  },
  new: (req, res) => {
    movieService.getNewestMovies().then((movies) => {
      res.render("newestMovies", { movies });
    });
  },
  recomended: (req, res) => {
    movieService.getRecomendedMovies().then((movies) => {
      res.render("recommendedMovies", { movies });
    });
  },
  detail: (req, res) => {
    movieService.getMovieDetail(req.params.id).then((movie) => {
      res.render("moviesDetail", { movie });
    });
  },
  createForm: (req, res) => {
      res.render("moviesAdd");
    },

   create: (req, res) => {
    const newMovie =   { title: req.body.title,
    rating: req.body.rating,
    awards: req.body.awards,
    releaseDate: req.body.release_date,
    length: req.body.length }
    console.log(newMovie)
    movieService.createMovies(newMovie).then((movie)=> {
      res.redirect("/movies")
    })
   },

   editForm: (req, res)=>{
   const id = req.params.id;
   const Movie = movieService.getMovieDetail(id)
   .then((Movie)=> {
    console.log(Movie.id)
    res.render("moviesEdit", {Movie})
   })
   
    
   },

   update: (req, res) => {
    const editedMovie =   { title: req.body.title,
    rating: req.body.rating,
    awards: req.body.awards,
    releaseDate: req.body.release_date,
    length: req.body.length }
    console.log(editedMovie)
    movieService.editMovies(editedMovie, req.params.id).then((movie)=> {
      res.redirect("/movies")})
    },
  }