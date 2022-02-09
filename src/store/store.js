import {configureStore} from "@reduxjs/toolkit";

import movieReducer from "./slices/movieSlice";


const store = configureStore({
    reducer: {
        moviesRed: movieReducer


    }
});

export default store;