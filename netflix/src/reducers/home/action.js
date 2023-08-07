import { getRequest } from "../common/commonCrud";
import { homeSlice } from "./homeSlice";

const { actions } = homeSlice;

export const getCurrentTrending = () => (dispatch) => {
  return getRequest(`/trending/all/week?language=en-US`)
    .then((response) => {
      console.log("Response of getCurrentTrending", response);
      if (response.data) {
        dispatch(actions.currentTrendingList(response.data.results));
      }
    })
    .catch((error) => {
      console.log("Error while fetching data from API", error);
    });
};

export const getLatestMovies = () => (dispatch) => {
  return getRequest(`movie/top_rated?language=en-US&page=1`)
    .then((response) => {
      console.log("Response of topRated", response);
      if (response.data) {
        dispatch(actions.topRatedList(response.data.results));
      }
    })
    .catch((error) => {
      console.log("Error while fetching data from API", error);
    });
};
