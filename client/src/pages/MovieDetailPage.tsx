import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import useHttp from "../hooks/use-http";
import { movieDetailActions } from "../store/movieDetail-slice";

import MovieDetail from "../components/MovieDetail/MovieDetail";
import LoadingSpinner from "../ui/LoadingSpinner";

import {
  MovieDetailPageContainer,
  MessageContainer,
} from "./MovieDetailPage.styles";

const MovieDetailPage = () => {
  const { id } = useParams();
  const { isLoading, error, sendRequest: fetchMovieDetail } = useHttp();
  const dispatch = useDispatch();

  useEffect(() => {
    const movieDetail = async () => {
      const endpoint = process.env.REACT_APP_API_BASE_URL
        ? process.env.REACT_APP_API_BASE_URL
        : "http://localhost:8080/api";
      const data = await fetchMovieDetail({
        url: endpoint + `/movie/${id}`,
      });
      dispatch(movieDetailActions.setMovieDetail(data));
    };
    if (id) {
      movieDetail();
    }
  }, [id]);

  const renderMovieDtailPage = () => {
    if (isLoading) {
      return (
        <MessageContainer>
          <LoadingSpinner />
        </MessageContainer>
      );
    }
    if (error) {
      return <MessageContainer>{error}</MessageContainer>;
    }
    return <MovieDetail />;
  };

  return (
    <MovieDetailPageContainer>
      {renderMovieDtailPage()}
    </MovieDetailPageContainer>
  );
};

export default MovieDetailPage;
