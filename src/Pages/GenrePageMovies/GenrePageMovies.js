import React, {useEffect} from 'react';
import {useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";

import {getGenreMovies} from "../../store";
import {MovieCard} from "../../components";

const GenrePageMovies = () => {
    const {genreMovies,status} = useSelector(state => state.genresRed);
    const {genreId} = useParams();
    const dispatch = useDispatch();
    console.log(genreId);

    useEffect(()=>{
        dispatch(getGenreMovies(genreId));
    },[])
    console.log(status);

    if (status==='good') {
        return (
            <div>
                {genreMovies.map(movie => <MovieCard key={movie.id} movie={movie}/>)}
            </div>
        );
    }
    return (
        <div>
            <h1>errrrrrrrrorrrrrrrrrrrrrrrrrr</h1>
        </div>
    );
};

export  {GenrePageMovies};