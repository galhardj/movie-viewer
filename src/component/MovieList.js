import Item from "./Item";
import { useDispatch } from "react-redux";

const MovieList = (props) => {
  const dispatch = useDispatch();

  const listClickHandler = (clickedTitle) => {
    console.log("dispatch")
    dispatch({ type: "update title", payload: clickedTitle });
  };

  return (
    <div>
      <ul className="movie-list">
        {props.movies.map((movie) => (
          <Item
            title={movie.title}
            onMovieClick={props.onMovieClick}
            onTitleClick={listClickHandler}
          />
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
