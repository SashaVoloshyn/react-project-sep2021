import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

import {movieService} from "../../services/movie.service";


const initialState = {
    movies: [],
    movie: null,
    status: null,
    error: null
}
export const getAllMovies = createAsyncThunk(
    'movieSlice/getAllMovies',
    async (_, { rejectWithValue}) => {
        try {
            return await movieService.getAll();

        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const getMovieDetails = createAsyncThunk(
    'movieSlice/getMovieDetails',
    async (movieId, { rejectWithValue}) => {
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
    reducers: {},

    extraReducers: {
        [getMovieDetails.pending]: (state) => {
            state.status = 'loading';
            state.error = null;

        },
        [getMovieDetails.fulfilled]: (state, action) => {
            state.movie = action.payload ;
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
            state.status = 'resolved';
            console.log(state.movies)

        },
        [getAllMovies.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;

        },



    }
})


const movieReducer = movieSlice.reducer;


export default movieReducer;