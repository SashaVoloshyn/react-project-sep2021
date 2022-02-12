import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {genreService} from "../../services/genre.service";


const initialState = {
    genreMovies:[],
    genres: [],
    status: null,
    error: null,
    currentPage: 1,
    totalCount: 1,
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
    async ({genreId,currentPage}, { rejectWithValue}) => {
        try {
            return await genreService.getGenreMovies(genreId, currentPage);

        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);


const genreSlice = createSlice({
    name : 'genreSlice',
    initialState,
    reducers:{
        pagination: (state, action) => {
            state.currentPage = action.payload.page;
            console.log(state.currentPage);
            console.log(action.payload);
        }

    },
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
            state.totalCount = action.payload.total_pages;
            state.status = 'good';
            console.log(state.totalCount);
            console.log(action.payload);


        },
        [getGenreMovies.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;

        },
    }
});


const genreReducer = genreSlice.reducer;
const {pagination} = genreSlice.actions;

export default genreReducer;
export const genreActions={pagination}


