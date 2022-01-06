import "./App.css";
import Page from "./component/Page";
import { Provider } from "react-redux";
import store from "./store";

const MOVIE_LIST = [
  {
    title: "Gone Girl",
    director: "Rosamund Pike",
    cast: "Ben Affleck, Neil Patrick Harris",
    genre: "Thriller, Suspense",
  },
  {
    title: "Whiplash",
    director: "Miles Teller",
    cast: "J.K. Simmons, Melissa Benoist",
    genre: "Musical, Drama",
  },
  {
    title: "La La Land",
    director: "Emma Stone",
    cast: "Ryan Gosling, John Legend",
    genre: "Musical, Drama, Comedy",
  },
  {
    title: "Spiderman",
    director: "Tom Holland",
    cast: "Zendaya, Benedict Cumberbatch",
    genre: "Fantasy, Adventure, Action",
  },
];

export default function App() {
  return (
    <Provider store={store}>
      <Page movies={MOVIE_LIST} />
    </Provider>
  );
}
