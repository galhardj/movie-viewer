import { render, screen } from "@testing-library/react";
import MovieCard from "./MovieCard";

describe("Movie Card component", () => {
  test("render movie display", () => {
    const testMovieData = {
        title: 'haha',
        director: 'haha'
    }
    render(<MovieCard movie={testMovieData} />);

    //check the text of 'Directors'. false means as long as that word is there it is ok, 
    //not care if there's also other letter in the DOM 
    const cardElement = screen.getByText("Directors", { exact: false });
    // const cardElement = screen.get
    //check whether the element is in the DOM
    expect(cardElement).toBeInTheDocument(); 
  });
});
