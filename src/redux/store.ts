import {configureStore} from "@reduxjs/toolkit"
import { movieReducer } from "./reducer/movieReducer"


const store = configureStore({
    reducer:{
        details: movieReducer
    }
})


export default store;
export const server = "http://localhost:5000"








