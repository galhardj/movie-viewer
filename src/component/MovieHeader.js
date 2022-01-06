import { useSelector } from "react-redux";

const MovieHeader = () => {
  const title = useSelector((state) => state.title);

  return <h1>🎥 {title}</h1>;
};

export default MovieHeader;
