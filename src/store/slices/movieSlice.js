import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

import {movieService} from "../../services/movie.service";

const initialState = {
    movies: [],
    movie: null,
    status: null,
    error: null,
    currentPage: 1,
    totalCount: 1,
    data: null
};


export const getAllMovies = createAsyncThunk(
    'movieSlice/getAllMovies',
    async (currentPage, {rejectWithValue}) => {
        try {
            return await movieService.getAll(currentPage);

        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);


export const getTopMovies = createAsyncThunk(
    'movieSlice/getTopMovies',
    async (currentPage, {rejectWithValue}) => {
        try {
            return await movieService.getTopMovie(currentPage);

        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);


export const getMovieDetails = createAsyncThunk(
    'movieSlice/getMovieDetails',
    async (movieId, {rejectWithValue}) => {
        try {
            return await movieService.getMovie(movieId);

        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);


const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {
        pagination: (state, action) => {
            state.currentPage = action.payload.page;

        }
    },

    extraReducers: {
        [getMovieDetails.pending]: (state) => {
            state.status = 'loading';
            state.error = null;

        },
        [getMovieDetails.fulfilled]: (state, action) => {
            state.movie = action.payload;
            state.status = 'movie-resolved';

        },
        [getMovieDetails.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;

        },


        [getAllMovies.pending]: (state) => {
            state.status = 'loading';
            state.error = null;

        },
        [getAllMovies.fulfilled]: (state, action) => {
            state.movies = action.payload.results;
            state.data = action.payload;
            state.totalCount = action.payload.total_pages
            state.status = 'resolved';

        },
        [getAllMovies.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;

        },


        [getTopMovies.fulfilled]: (state, action) => {
            state.movies = action.payload.results;
            state.data = action.payload;
            state.totalCount = action.payload.total_pages;
            state.status = 'resolvedTop';
        }

    }
});


const movieReducer = movieSlice.reducer;
const {pagination} = movieSlice.actions;

export default movieReducer;
export const movieActions = {pagination}
