import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import useHttp from "../hooks/use-http";
import { movieDetailActions } from "../store/movieDetail-slice";

import MovieDetail from "../components/MovieDetail/MovieDetail";
import RecommendedMovie from "../components/RecommendedMovie/RecommendedMovie";
import LoadingSpinner from "../ui/LoadingSpinner";

import {
  MovieDetailPageContainer,
  MessageContainer,
} from "./MovieDetailPage.styles";

const MovieDetailPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  if (!id) {
    navigate("/noresourcesfound");
  }

  const { isLoading, error, sendRequest:fetchDetail } = useHttp();
  const dispatch = useDispatch();

  useEffect(() => {
    const movieDetail = async () => {
      const MovieDetailEndpoint = process.env.REACT_APP_API_BASE_URL
        ? process.env.REACT_APP_API_BASE_URL
        : "http://localhost:8080/api";
      const MovieDetailData = await fetchDetail({
        url: MovieDetailEndpoint + `/movie/${id}`,
      });
      dispatch(movieDetailActions.setMovieDetail(MovieDetailData));
    };
    movieDetail();
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
    if (!id) {
      return <MessageContainer>No movie id</MessageContainer>;
    }
    return (
      <>
        <MovieDetail />
        <RecommendedMovie id={id} />
      </>
    );
  };

  return (
    <MovieDetailPageContainer>
      {renderMovieDtailPage()}
    </MovieDetailPageContainer>
  );
};

export default MovieDetailPage;
