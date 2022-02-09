import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

import {movieService} from "../../services/movie.service";


const initialState = {
    id: 0,
    movies: [],
    movie: null,
    status: null,
    error: null
}
export const getAllMovies = createAsyncThunk(
    'movieSlice/getAllMovies',
    async (_, {dispatch, rejectWithValue}) => {
        try {
            return await movieService.getAll();

        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
);

export const getMovieDetails = createAsyncThunk(
    'movieSlice/getMovieDetails',
    async (movieId, {dispatch, rejectWithValue}) => {
        try {
            return  await movieService.getMovie(movieId)


        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)
const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {},

    extraReducers: {
        [getAllMovies.fulfilled]: (state, action) => {
            state.movies = action.payload
            console.log(state)
            console.log(action)

        },
        [getMovieDetails.pending]: (state) => {
            state.status = 'loading'
            state.error = null
        },
        [getMovieDetails.fulfilled]: (state, action) => {
            state.movie = action.payload;
            state.status = 'good';

        }


    }
})


const movieReducer = movieSlice.reducer;


export default movieReducer;