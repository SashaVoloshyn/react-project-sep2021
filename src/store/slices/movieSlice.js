import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";

import {movieService} from "../../services/movie.service";


const initialState={
    id:0,
    movies: [],
    status:null,
    error:null
}
export  const getAllMovies =createAsyncThunk(
    'movieSlice/getAllMovies',
    async (_, {dispatch,rejectWithValue}) => {
        try {
            return  await movieService.getAll();

        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
);

export const getMovieDetails=createAsyncThunk(
    'movieSlice/getMovieDetails',
    async (movieId,{dispatch})=>{
        try {
            return   await movieService.getMovie(movieId)



        } catch (error){
        }
    }
)
const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers:{

    },

    extraReducers:{
        [getAllMovies.fulfilled]: (state, action) => {
            state.movies = action.payload
            console.log('alll',state.movies)

        },
        [getMovieDetails.fulfilled]:(state,action)=>{
            state.movies.push(action.payload);
            console.log('solo',state.movies)


        }


    }
})


const movieReducer = movieSlice.reducer;


export default movieReducer;