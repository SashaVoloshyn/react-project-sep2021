import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";

import {filmService} from "../../services/fim.service";


const initialState={
    films: [],
    status:null,
    error:null
}

// export const getAllFilms = createAsyncThunk(
//     'filmSlice/getAllFilms',
//     async (_, {dispatch,rejectWithValue}) => {
//         try {
//             return await filmService.getAll()
//
//         } catch (error) {
//             return rejectWithValue(error.response.data)
//         }
//     }
// )

const filmSlice = createSlice({
    name: 'filmSlice',
    initialState,
    reducers:{
        getAllFilms:(state, action) => {
            state.films = action.payload;
        }

    },

    extraReducers: {
        // [getAllFilms.fulfilled]: (state, action) => {
        //     state.films = action.payload
        //     console.log(state.films);
        // }
}
})


const filmReducer = filmSlice.reducer;


export const {getAllFilms} = filmSlice.actions;
export default filmReducer;