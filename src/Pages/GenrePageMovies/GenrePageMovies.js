import React from 'react';

import GenreMovies from "../../components/GanreMovies/GenreMovies";
import {Genres} from "../../components";
import css from './GenrePage.Movie.module.css';

const GenrePageMovies = () => {
    return (
        <div className={css.movies}>
            <h1 className={css.аnimTxt}>Movies</h1>

            <div className={css.moviesCont}>

                <Genres/>
                <GenreMovies/>

            </div>
        </div>
    );
};



export  {GenrePageMovies};