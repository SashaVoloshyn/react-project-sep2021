import React from 'react';
import {useDispatch} from "react-redux";
import {Link, useParams} from "react-router-dom";

import {getMovieDetails} from "../../store";

const MovieCard = ({movie}) => {
    const {original_title, poster_path, id} = movie;
    const dispatch = useDispatch();
    const useParams1 = useParams();



    return (
        <div>
            <Link to={`${movie.id}`}>

                <div>{movie.original_title}</div>
                <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt={movie.title}/>

            </Link>
        </div>
    );
};

export {MovieCard};