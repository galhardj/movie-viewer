import { createStore } from "redux";

const initialState = {
  title: "Movie Catalogue",
};

const titleReducer = (state = initialState, action) => {
  // if (action.type === 'update title') {
  //     return {
  //         title: action.payload,
  //     }
  // }
  // return state
  return action.type === "update title" ? { title: action.payload } : state;
};

const store = createStore(titleReducer);

export default store;
