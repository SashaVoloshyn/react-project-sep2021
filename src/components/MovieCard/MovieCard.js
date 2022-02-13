import React from 'react';
import {Link} from "react-router-dom";
import Rating from '@mui/material/Rating';

import css from './MovieCard.module.css';



const MovieCard = ({movie}) => {

    return (
        <div className={css.movieCard}>

            <Link to={`/movies/${movie.id}/${movie.title}`}>



                <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt={movie.title}/>
                <div className={css.rating}>
                    <Rating name="read-only" defaultValue={movie.vote_average} precision={0.5} max={10}  readOnly />
                </div>
                <div className={css.title}>

                    <h3>
                        {movie.original_title}
                    </h3>

                </div>

            </Link>
        </div>
    );
};

export {MovieCard};