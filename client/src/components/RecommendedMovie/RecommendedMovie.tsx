import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/index";

import useHttp from "../../hooks/use-http";
import LoadingSpinner from "../../ui/LoadingSpinner";
import MovieGalleryItem from "../MovieGallery/MovieGalleryItem";
import { MovieInList } from "../../types/movie-types";

import {
  RecommendedListContainer,
  RecommendedListTitle,
  RecommendedList,
  MessageContainer,
} from "./RecommendedMovie.styles";

type Props = {
  id: string;
};

const RecommendedMovie = ({ id }: Props) => {
  // const { isLoading, error, sendRequest: fetchRecommend } = useHttp();

  // const [recommendList, setRecommendList] = useState<any[]>([]);

  // useEffect(() => {
  //   const recommendedMovies = async () => {
  //     const endpoint = process.env.REACT_APP_API_BASE_URL
  //       ? process.env.REACT_APP_API_BASE_URL
  //       : "http://localhost:8080/api";
  //     const data = await fetchRecommend({
  //       url: endpoint + `/recommended/${id}`,
  //     });
  //     console.log("data", data);
  //     setRecommendList(data);
  //   };
  //   recommendedMovies();
  // }, []);

  // useEffect(() => {
  //   const recommendedMovies = async () => {
  //     const endpoint = process.env.REACT_APP_API_BASE_URL
  //       ? process.env.REACT_APP_API_BASE_URL
  //       : "http://localhost:8080/api";
  //     const data = await fetch(endpoint + `/recommended/${id}`);
  //     const json = await data.json();
  //     setRecommendList(json);
  //   };
  //   try {
  //     recommendedMovies();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }, []);

  // console.log("recommendList", recommendList);

  // const renderRecommendedMovie = () => {
  //   if (!recommendList) {
  //     return <MessageContainer>No recommended movies</MessageContainer>;
  //   }
  //   if (isLoading) {
  //     return (
  //       <MessageContainer>
  //         <LoadingSpinner />
  //       </MessageContainer>
  //     );
  //   }
  //   if (error) {
  //     return <MessageContainer>{error}</MessageContainer>;
  //   }
  //   return (
  //     <RecommendedList>
  //       {recommendList.map((movie) => (
  //         <MovieGalleryItem
  //           key={movie.id}
  //           title={movie.title}
  //           year={movie.year}
  //           id={movie.id}
  //           poster_path={movie.poster_path}
  //         />
  //       ))}
  //     </RecommendedList>
  //   );
  // };

  return (
    <RecommendedListContainer>
      <RecommendedListTitle>More Recommended Movies:</RecommendedListTitle>
      {/* {renderRecommendedMovie()} */}
    </RecommendedListContainer>
  );
};

export default RecommendedMovie;
