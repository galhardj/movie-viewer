import React, { useState } from "react";
import MovieHeader from "./MovieHeader";
import MovieList from "./MovieList";
import MovieCard from "./MovieCard";

const MovieViewer = (props) => {
  const [currentTitle, updateTitle] = useState(props.movies[1].title);

  const listClickHandler = (clickedTitle) => {
    console.log(clickedTitle);
    updateTitle(clickedTitle);
  };

  const filteredMovie = props.movies.find((display) => {
    return display.title === currentTitle;
  });

  return (
    <div>
      <MovieHeader />
      <MovieCard movie={filteredMovie} />
      <MovieList movies={props.movies} onMovieClick={listClickHandler} />
    </div>
  );
};

export default MovieViewer;
