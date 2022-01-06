import MovieViewer from "./MovieViewer";

const Page = (props) => {
  return (
    <div>
      <MovieViewer movies={props.movies} />
    </div>
  );
};

export default Page;
