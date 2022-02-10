import {configureStore} from "@reduxjs/toolkit";

import movieReducer from "./slices/movieSlice";
import genreReducer from "./slices/genreSlice";


const store = configureStore({
    reducer: {
        moviesRed: movieReducer,
        genresRed:genreReducer


    }
});

export default store;