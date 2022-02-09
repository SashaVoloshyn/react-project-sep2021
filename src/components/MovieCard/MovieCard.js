import React from 'react';
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";

import {getMovieDetails} from "../../store";

const MovieCard = ({movie}) => {
    const dispatch = useDispatch();


    return (
        <div>
            <Link to={`${movie.id}`} onClick={()=>dispatch(getMovieDetails(movie.id))}>

                <div>{movie.original_title}</div>
                <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt={movie.title}/>

            </Link>
        </div>
    );
};

export {MovieCard};