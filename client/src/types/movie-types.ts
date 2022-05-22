export type MovieInList = {
  id: number;
  title: string;
  poster_path: string;
  year: string;
};

export type MovieList = {
  loadPage: number;
  searchList: MovieInList[];
};

export type MovieDetail = {
  id: number;
  title: string;
  tagline: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  release_date: string;
  runtime: number;
  genres: Genre[];
  director: Director;
  actors: Cast[];
  vote_average: number;
};

export type Genre = {
  id: number;
  name: string;
};

export type Director = {
  id: number;
  name: string;
  profile_path: string;
};

export type Cast = {
  id: number;
  name: string;
  character: string;
  profile_path: string;
};
