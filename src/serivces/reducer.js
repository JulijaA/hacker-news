import {
  HANDLE_LOADING,
  GET_STORIES,
  HANDLE_PAGE,
  HANDLE_SEARCH,
} from "./actions";

const reducer = (state, action) => {
  switch (action.type) {
    case HANDLE_LOADING:
      return { ...state, isLoading: true };
    case GET_STORIES:
      return {
        ...state,
        isLoading: false,
        hits: action.payload.hits,
        nbPages: action.payload.nbPages,
      };
    case HANDLE_SEARCH:
      return { ...state, query: action.payload, page: 0 };
    case HANDLE_PAGE:
      if (action.payload === "inc") {
        let nextPage = state.page + 1;
        if (nextPage > state.nbPages - 1) {
          nextPage = 0;
        }
        return { ...state, page: nextPage };
      }
      if (action.payload === "dec") {
        let prevPage = state.page - 1;
        if (prevPage < 0) {
          prevPage = state.nbPages - 1;
        }
        return { ...state, page: prevPage };
      }
    default:
      throw new Error(`no mathching "${action.type}" action type`);
  }
};
export default reducer;
