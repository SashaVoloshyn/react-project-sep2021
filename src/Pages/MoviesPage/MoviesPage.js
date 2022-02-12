import React from 'react';

import css from './Movies.module.css';
import {Genres, Movies} from "../../components";

const MoviesPage = () => {
    return (
        <div className={css.movies}>
            <h1>Movies</h1>
            <div className={css.moviesCont}>
                <Genres/>
                <Movies/>

            </div>
            <hr/>
        </div>
    );
};

export {MoviesPage};