const {
  fetchMovieList,
  fetchMovieDetails,
  fetcRecommendedMovies,
} = require("../libs/api.lib");
const { cache } = require("../middlewares/cache");

exports.getMovieList = async (req, res) => {
  const enteredTitle = req.query.title;
  const page = req.query.page;
  try {
    const movieList = await fetchMovieList(enteredTitle, page);
    res.status(200).json(movieList);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getMovieDetails = async (req, res) => {
  const movieId = req.params.id;

  try {
    const movieDetails = await fetchMovieDetails(movieId);
    cache.set(movieId, movieDetails);
    res.status(200).json(movieDetails);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getRecommendedMovies = async (req, res) => {
  const movieId = req.params.id;

  try {
    const recommendedMovies = await fetcRecommendedMovies(movieId);
    console.log(recommendedMovies);
    res.status(200).json(recommendedMovies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
