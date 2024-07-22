import { createReducer} from "@reduxjs/toolkit";


interface MovieState {
    loading?: boolean;
    data?: any; 
    error?:string|null;
    totalPage?:number;
    pageLength?:number;
    message?:string|null;
    singleData?:any
}


const initialState: MovieState = {
    loading: false,
    totalPage:0,
    pageLength:0,
    message:"",
    error:""
};



// Create reducer
export const movieReducer = createReducer(initialState, (builder) => {
    builder
        .addCase("getMoviesRequest", (state) => {
            state.loading = true;
        })
        .addCase("getMoviesSuccess", (state, action: any) => {
            state.loading = false;
            state.data = action.payload.data;
            state.totalPage = action.payload.totalPages;
            state.pageLength = action.payload.totalCount;

        })
        .addCase("getMovieFail",(state,action:any)=>{
            state.loading = false;
            state.error = action.payload
        })
        .addCase("createMoviesRequest", (state) => {
            state.loading = true;
        })
        .addCase("createMoviesSuccess", (state, action: any) => {
            state.loading = false;
            state.message = action.payload;
        })
        .addCase("createMoviesFail",(state,action:any)=>{
            state.loading = false;
            state.error = action.payload
        })
        .addCase("deleteMoviesRequest", (state) => {
            state.loading = true;
        })
        .addCase("deleteMoviesSuccess", (state, action: any) => {
            state.loading = false;
            state.message = action.payload;
        })
        .addCase("deleteMoviesFail",(state,action:any)=>{
            state.loading = false;
            state.error = action.payload
        })
        .addCase("updateMoviesRequest", (state) => {
            state.loading = true;
        })
        .addCase("updateMoviesSuccess", (state, action: any) => {
            state.loading = false;
            state.message = action.payload;
        })
        .addCase("updateMoviesFail",(state,action:any)=>{
            state.loading = false;
            state.error = action.payload
        })
        .addCase("getsingleMoviesRequest", (state) => {
            state.loading = true;
        })
        .addCase("getsingleMoviesSuccess", (state, action: any) => {
            state.loading = false;
            state.singleData = action.payload.data;
           

        })
        .addCase("getsingleMovieFail",(state,action:any)=>{
            state.loading = false;
            state.error = action.payload
        })
        .addCase('clearError', (state) => {
            state.error = null;
        })
        .addCase('clearMessage', (state) => {
            state.message = null;
        })

});
