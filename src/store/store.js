import {configureStore} from "@reduxjs/toolkit";

import filmReducer from "./slices/filmSlice";

const store = configureStore({
    reducer: {
        filmsRed: filmReducer


    }
});

export default store;