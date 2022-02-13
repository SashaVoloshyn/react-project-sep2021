import React from 'react';

import css from './TopMoviePage.module.css';
import {Genres, TopMovies} from "../../components";

const TopMoviesPage = () => {
    return (
        <div className={css.movies}>
            <h1 className={css.аnimTxt}>Top Movies</h1>
            <div className={css.moviesCont}>
                <Genres/>
                <TopMovies/>
            </div>
        </div>
    );
};

export {TopMoviesPage};