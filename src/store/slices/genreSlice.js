import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {genreService} from "../../services/genre.service";


const initialState = {
    genreMovies:[],
    genres: [],
    status: null,
    error: null
};
export const getAllGenres = createAsyncThunk(
    'genreSlice/getAllGenres',
    async (_, { rejectWithValue}) => {
        try {
            return await genreService.getAll();

        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);
export const getGenreMovies = createAsyncThunk(
    'genreSlice/getGenreMovies',
    async (genreId, { rejectWithValue}) => {
        try {
            return await genreService.getGenreMovies(genreId);

        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);


const genreSlice = createSlice({
    name : 'genreSlice',
    initialState,
    extraReducers:{
        [getAllGenres.pending]: (state) => {
            state.status = 'loading';
            state.error = null;

        },
        [getAllGenres.fulfilled]: (state, action) => {
            state.genres = action.payload;
            state.status = 'resolved';

        },
        [getAllGenres.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;

        },


        [getGenreMovies.pending]: (state) => {
            state.status = 'loading';
            state.error = null;

        },
        [getGenreMovies.fulfilled]: (state, action) => {
            state.genreMovies = action.payload.results;
            state.status = 'good';
            console.log('sssssssssss',state.genreMovies);

        },
        [getGenreMovies.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;

        },
    }
});


const genreReducer = genreSlice.reducer;

export default genreReducer;
