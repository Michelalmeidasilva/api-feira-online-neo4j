/** source/routes/posts.ts */
import express from "express";
import controller from "../controllers/movies";
const router = express.Router();

router.get("/movies", controller.getMovies);
router.get("/movies/:id", controller.getMovies);
router.put("/movies/:id", controller.updateMovie);
router.delete("/movies/:id", controller.deleteMovie);
router.post("/movies", controller.addMovie);

export = router;
