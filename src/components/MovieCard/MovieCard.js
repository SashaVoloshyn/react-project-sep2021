import React from 'react';
import {Link} from "react-router-dom";


const MovieCard = ({movie}) => {

    return (
        <div>
            <Link to={`/movies/${movie.id}/${movie.title}`}>

                <div>{movie.original_title}</div>
                <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt={movie.title}/>

            </Link>
        </div>
    );
};

export {MovieCard};