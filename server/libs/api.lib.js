const fetch = require("node-fetch");
const {
  transformMovieList,
  tranformMovieProductionInfo,
  transformMovieCredits,
} = require("../libs/data-transform.lib");

const fetchMovieList = async (title, page) => {
  const url = `${process.env.TMDB_DOMAIN}/search/movie?api_key=${process.env.TMDB_API_KEY}&query=${title}&page=${page}`;
  const rawData = await sendHttpRequest(url);
  const transformedData = transformMovieList(rawData.results);
  return transformedData;
};

const fetchMovieDetails = async (id) => {
  const productionInfo = await fetchMoviProductionInfo(id);
  const creditInfo = await fetchMovieCredits(id);
  const recommendedMovies = await fetcRecommendedMovies(id);
  const fullDetails = {
    ...productionInfo,
    ...creditInfo,
    recommended: recommendedMovies,
  };
  return fullDetails;
};

const fetchMoviProductionInfo = async (id) => {
  const url = `${process.env.TMDB_DOMAIN}/movie/${id}?api_key=${process.env.TMDB_API_KEY}`;
  const RawData = await sendHttpRequest(url);
  const transformedData = tranformMovieProductionInfo(RawData);
  return transformedData;
};

const fetchMovieCredits = async (id) => {
  const url = `${process.env.TMDB_DOMAIN}/movie/${id}/credits?api_key=${process.env.TMDB_API_KEY}`;
  const RawData = await sendHttpRequest(url);
  const transformedData = transformMovieCredits(RawData);
  return transformedData;
};

const fetcRecommendedMovies = async (id) => {
  const url = `${process.env.TMDB_DOMAIN}/movie/${id}/recommendations?api_key=${process.env.TMDB_API_KEY}`;
  const RawData = await sendHttpRequest(url);
  const transformedData = transformMovieList(RawData.results);
  return transformedData;
};

const sendHttpRequest = async (url) => {
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  if (!response.ok) {
    const error = new Error(data.status_message);
    throw error;
  }
  return data;
};

module.exports = { fetchMovieList, fetchMovieDetails, fetcRecommendedMovies };
