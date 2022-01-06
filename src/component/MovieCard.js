const MovieCard = ({ movie }) => {
  return (
    <div>
      <h1>{movie.title}</h1>
      <ul className="movie-display">
        <li>
          <b>Directors: </b>
          {movie.director}
        </li>
        <li>
          <b>Casts: </b>
          {movie.cast}
        </li>
        <li>
          <b>Genre: </b>
          {movie.genre}
        </li>
      </ul>
    </div>
  );
};

export default MovieCard;
