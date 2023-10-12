const express = require("express");
const router = express.Router();
const moviesController = require("../controllers/moviesController");

router.get("/movies", moviesController.list);
router.get("/movies/new", moviesController.new);
router.get("/movies/recommended", moviesController.recomended);
router.get("/movies/detail/:id", moviesController.detail);
router.get("/movies/add", moviesController.createForm);
router.post('/movies/create', moviesController.create);
router.get('/movies/edit/:id', moviesController.editForm);
router.put('/movies/update/:id', moviesController.update);

module.exports = router;
