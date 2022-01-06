const Item = ({ title, onMovieClick, onTitleClick }) => {
  const clickHandler = () => {
    onMovieClick(title);
    onTitleClick(title);
  };

  return (
    <li className="movie-item" onClick={clickHandler}>
      {title}
    </li>
  );
};

export default Item;
