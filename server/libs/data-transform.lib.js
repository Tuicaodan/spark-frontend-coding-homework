const transformMovieList = (movies) => {
  return movies.map((movie) => {
    return {
      id: movie.id,
      title: movie.title,
      year: movie.release_date.split("-")[0],
      poster_path: movie.poster_path,
    };
  });
};

const tranformMovieProductionInfo = (movie) => {
  return {
    id: movie.id,
    title: movie.title,
    year: movie.release_date.split("-")[0],
    poster_path: movie.poster_path,
    overview: movie.overview,
    vote_average: movie.vote_average,
    runtime: movie.runtime,
    tagline: movie.tagline,
    release_date: movie.release_date,
    backdrop_path: movie.backdrop_path,
    genres: movie.genres,
  };
};

const transformMovieCredits = (credits) => {
  const directorFullDetail = credits.crew.find(
    (member) => member.job === "Director"
  );
  const director = {
    id: directorFullDetail.id,
    name: directorFullDetail.name,
    profile_path: directorFullDetail.profile_path,
  };

  const actorsBySortOrder = credits.cast.sort(
    (a, b) => b.popularity - a.popularity
  );

  const leadingActors = actorsBySortOrder.filter((actor, index) => index < 4);
  const actors = leadingActors.map((actor) => {
    return {
      id: actor.id,
      name: actor.name,
      character: actor.character,
      profile_path: actor.profile_path,
    };
  });

  const transformedCredits = {
    director,
    actors,
  };
  return transformedCredits;
};

module.exports = {
  transformMovieList,
  tranformMovieProductionInfo,
  transformMovieCredits,
};
