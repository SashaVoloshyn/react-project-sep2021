import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {MovieCard} from "../MovieCard/MovieCard";
import {getAllMovies} from "../../store";

const Movies = () => {
    const {movies} = useSelector(state=> state.moviesRed);
    const dispatch = useDispatch();
    console.log('films============',movies);




    useEffect(()=>{
        dispatch(getAllMovies())

    },[])


    return (
        <div>
            {movies && movies.map(movie=><MovieCard movie={movie} key={movie.id}/>)}
        </div>
    );
};

export {Movies};