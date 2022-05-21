const fetch = require("node-fetch");

const fetchMovieList = async (title, page) => {
  const url = `${process.env.TMDB_DOMAIN}/search/movie?api_key=${process.env.TMDB_API_KEY}&query=${title}&page=${page}`;
  const RawData = await sendHttpRequest(url);
  return RawData;
};

const fetchMovieDetails = async (id) => {
  const url = `${process.env.TMDB_DOMAIN}/movie/${id}?api_key=${process.env.TMDB_API_KEY}`;
  const RawData = await sendHttpRequest(url);
  return RawData;
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
    error.status = response.status;
    throw error;
  }
  return data;
};

module.exports = { fetchMovieList, fetchMovieDetails };
