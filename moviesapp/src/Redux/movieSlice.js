import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../utils/Apis/movieApi";
import { APIKEY } from "../utils/Apis/MovieApiKey";

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async (searchTerm) => {
    const response = await movieApi.get(
      `?apiKey=${APIKEY}&s=${searchTerm}&type=movie`
    );
    return response.data;
  }
);
export const fetchAsyncShows = createAsyncThunk(
  "movies/fetchAsyncShows",
  async (searchTerm) => {
    const response = await movieApi.get(
      `?apiKey=${APIKEY}&s=${searchTerm}&type=series`
    );
    return response.data;
  }
);
export const fetchAsyncMovieOrShowDetail = createAsyncThunk(
  "movies/fetchAsyncMovieOrShowDetail",
  async (id) => {
    const response = await movieApi.get(`?apiKey=${APIKEY}&i=${id}&Plot=full`);
    return response.data;
  }
);
const initialState = {
  movies: {},
  shows: {},
  selectedMovieOrShow: {},
};
const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    removeSelectedMovieOrShow: (state, { payload }) => {
      state.selectedMovieOrShow = {};
    },
  },
  /*  extraReducers: (builder) => {
    builder.addCase(fetchAsyncMovies.pending, (state, { payload }) => {
      console.log("Pending");
    });
    builder.addCase(fetchAsyncMovies.fulfilled, (state, { payload }) => {
      console.log("Fullfiled");
      state.movies = payload;
    });
  }, */
  extraReducers: {
    [fetchAsyncMovies.pending]: () => {
      // console.log("Pending");
    },
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      // console.log("Fetch SUccessfully");
      return { ...state, movies: payload };
    },
    [fetchAsyncMovies.rejected]: () => {
      // console.log("Rejected");
    },
    [fetchAsyncShows.fulfilled]: (state, { payload }) => {
      // console.log("Shows Fetch Successfully");
      return { ...state, shows: payload };
    },
    [fetchAsyncMovieOrShowDetail.fulfilled]: (state, { payload }) => {
      // console.log("Shows Fetch Successfully");
      return { ...state, selectedMovieOrShow: payload };
    },
  },
});

export const { removeSelectedMovieOrShow } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getSelectedMovieOrShow = (state) =>
  state.movies.selectedMovieOrShow;
export default movieSlice.reducer;
