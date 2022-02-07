import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";

import {filmService} from "../../services/fim.service";


const initialState={
    films: [],
    status:null,
    error:null
}

export const getAllFilms = createAsyncThunk(
    'filmSlice/getAllFilms',
    async (_, {dispatch,rejectWithValue}) => {
        try {
            return await filmService.getAll()
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)

const filmSlice = createSlice({
    name: 'filmSlice',
    initialState,
    extraReducers: {
        [getAllFilms.pending]: (state) => {
            state.status = 'pending'
            state.error = null
        },
        [getAllFilms.fulfilled]: (state, action) => {
            state.films = action.payload
        },
        [getAllFilms.rejected]: (state, action) => {
            state.error = action.payload
        },
    }

});

const filmReducer = filmSlice.reducer;




export default filmReducer;