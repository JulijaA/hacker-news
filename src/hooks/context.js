import React, { useContext, useEffect, useReducer } from "react";

import {
  HANDLE_LOADING,
  GET_STORIES,
  HANDLE_PAGE,
  HANDLE_SEARCH,
} from "../serivces/actions";
import reducer from "../serivces/reducer";

const BASE_API = "https://hn.algolia.com/api/v1/search?";
const initialState = {
  isLoading: true,
  hits: [],
  query: "",
  tags: "",
  page: 0,
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchStories = async (url) => {
    dispatch({ type: HANDLE_LOADING });
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      if (
        !localStorage.getItem("data") ||
        JSON.parse(localStorage.getItem("data")).length === 0
      ) {
        localStorage.setItem("data", JSON.stringify(data));
      }
      dispatch({
        type: GET_STORIES,
        payload: { hits: data.hits, nbPages: data.nbPages },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearch = (query) => {
    dispatch({ type: HANDLE_SEARCH, payload: query });
  };
  const handlePage = (value) => {
    dispatch({ type: HANDLE_PAGE, payload: value });
  };
  useEffect(() => {
    fetchStories(
      `${BASE_API}query=${state.query}&tags=front_page&page=${state.page}`
    );
  }, [state.query, state.page]);

  return (
    <AppContext.Provider value={{ ...state, handleSearch, handlePage }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
