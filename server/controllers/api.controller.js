const { fetchMovieList, fetchMovieDetails } = require("../libs/api.lib");
const { cache } = require("../middlewares/cache");

exports.getMovieList = async (req, res) => {
  const enteredTitle = req.query.title;
  const page = req.query.page;
  try {
    const movieList = await fetchMovieList(enteredTitle, page);
    res.status(200).json(movieList);
  } catch (error) {
    console.log("error".error);
    res.status(error.status).json({ error: error.message });
  }
};

exports.getMovieDetails = async (req, res) => {
  const movieId = req.params.id;

  try {
    const movieDetails = await fetchMovieDetails(movieId);
    cache.set(movieId, movieDetails);
    res.status(200).json(movieDetails);
  } catch (error) {
    res.status(error.status).json({ error: error.message });
  }
};
