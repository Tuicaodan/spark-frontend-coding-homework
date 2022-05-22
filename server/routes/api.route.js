const express = require("express");
const apiRouter = express.Router();

const apiController = require("../controllers/api.controller");
const { verifyCache } = require("../middlewares/cache");

apiRouter.get("/movies", apiController.getMovieList);
apiRouter.get("/movie/:id", verifyCache, apiController.getMovieDetails);


module.exports = apiRouter;
