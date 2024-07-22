
import axios from "axios";
import { server } from "../store";


interface GetMovieProps {
    page: number;
    limit: number;
    title?: string;
    year?: number | string;
    genre?: string;
    rating?:number |string;
  }

  interface createMovieProps{
    id?:string;
    title?: string;
    year?: number|string;
    genre?: string;
    rating?:number|string;
  }

  interface deleteMovieProps{
    id:string
  }

// http://localhost:5000/getmovies?page=1&limit=10&genre&year=2024&title=title
export const getMovie = ( { page =1, limit=10, title="", year="", genre=""}: GetMovieProps) => async (dispatch:any) => {
    try {
        dispatch({ type: 'getMoviesRequest' });
        const { data } = await axios.get(`${server}/getmovies?page=${page}&limit=${limit}&genre=${genre}&year=${year}&title=${title}`);
        
        
        dispatch({
            type: 'getMoviesSuccess', payload: {
                data: data.data,
                totalPages: data.totalPages,
                totalCount: data.totalCount
            }
        });
    } catch (error) {
        if (axios.isAxiosError(error)) {

            const errorMessage = error.response?.data?.error || 'Unknown error occurred';
            console.log(errorMessage)
            console.log("dfjdsi");
            dispatch({
                type: 'getMoviesFail',
                payload: errorMessage,
            });
        } else {
            // Handle unexpected error types
            dispatch({
                type: 'getMoviesFail',
                payload: 'An unexpected error occurred in create',
            });
        }
    
    }
};


// http://localhost:5000/createmovie
export const createMovie = ({
    title,
    year ,
    genre ,
    rating 
}: createMovieProps):any => async (dispatch: any)  => {
    const form = new FormData();
    console.log(title,year,genre,rating)
    if (title) form.append("title", title);
    if (year) form.append("year", year.toString()); // Convert year to string
    if (genre) form.append("genre", genre);
    if (rating) form.append("rating", rating.toString()); // Convert rating to string

    try {
        dispatch({ type: 'createMoviesRequest' });
        const { data } = await axios.post(`${server}/createmovie`, form);
       
        console.log("data.message",data.message)
        dispatch({
            type: 'createMoviesSuccess', payload: data.message,
            
        });
    } catch (error) {
        console.log(error)
        if (axios.isAxiosError(error)) {

            const errorMessage = error.response?.data?.error || 'Unknown error occurred';
            console.log(errorMessage)
            dispatch({
                type: 'createMoviesFail',
                payload: errorMessage,
            });
        } else {
            // Handle unexpected error types
            dispatch({
                type: 'createMoviesFail',
                payload: 'An unexpected error occurred in Create movie',
            });
        }
    }
};


// http://localhost:5000/deletemovie/669bfb6bd723967e27491d2d
export const deleteMovie = ({id}: deleteMovieProps):any => async (dispatch: any)  => {
    try {
        dispatch({ type: 'deleteMoviesRequest' });
        const { data } = await axios.delete(`${server}/deletemovie/${id}`);
       
        console.log("data.message",data.message)
        dispatch({
            type: 'deleteMoviesSuccess', payload: data.message,
            
        });
    } catch (error) {
        console.log(error)
        if (axios.isAxiosError(error)) {

            const errorMessage = error.response?.data?.error || 'Unknown error occurred';
            console.log(errorMessage)
            dispatch({
                type: 'deleteMoviesFail',
                payload: errorMessage,
            });
        } else {
            // Handle unexpected error types
            dispatch({
                type: 'deleteMoviesFail',
                payload: 'An unexpected error occurred in delete movie',
            });
        }
    }
};




// http://localhost:5000/updatemovie/;id 
export const updateMovie = ({
    title,
    year ,
    genre ,
    rating ,
    id
}: createMovieProps):any => async (dispatch: any)  => {
    const form = new FormData();
    console.log(title,year,genre,rating)
    if (title) form.append("title", title);
    if (year) form.append("year", year.toString()); // Convert year to string
    if (genre) form.append("genre", genre);
    if (rating) form.append("rating", rating.toString()); // Convert rating to string

    try {
        dispatch({ type: 'updateMoviesRequest' });
        const { data } = await axios.put(`${server}/updatemovie/${id}`, form);
       
        console.log("data.message",data.message)
        dispatch({
            type: 'updateMoviesSuccess', payload: data.message,
            
        });
    } catch (error) {
        console.log(error)
        if (axios.isAxiosError(error)) {

            const errorMessage = error.response?.data?.error || 'Unknown error occurred';
            console.log(errorMessage)
            dispatch({
                type: 'createMoviesFail',
                payload: errorMessage,
            });
        } else {
            // Handle unexpected error types
            dispatch({
                type: 'updateMoviesFail',
                payload: 'An unexpected error occurred in update movie',
            });
        }
    }
};



// http://localhost:5000/singlemovie/669d4df209b49ef47050a6a9
export const getSingleMovie = ( { id}: any):any => async (dispatch:any) => {
    try {
        dispatch({ type: 'getsingleMoviesRequest' });
        const { data } = await axios.get(`${server}/singlemovie/${id}`);
        
        
        dispatch({
            type: 'getsingleMoviesSuccess', payload: {
                data: data.data,
            }
        });
    } catch (error) {
        if (axios.isAxiosError(error)) {

            const errorMessage = error.response?.data?.error || 'Unknown error occurred';
            console.log(errorMessage)
            console.log("dfjdsi");
            dispatch({
                type: 'getsingleMoviesFail',
                payload: errorMessage,
            });
        } else {
            // Handle unexpected error types
            dispatch({
                type: 'getsingleMoviesFail',
                payload: 'An unexpected error occurred in create',
            });
        }
    
    }
};
