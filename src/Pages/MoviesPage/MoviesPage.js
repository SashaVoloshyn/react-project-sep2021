import React from 'react';
import {Genres, Movies} from "../../components";

const MoviesPage = () => {
    return (
        <div>
            <h2>moviePage</h2>
            <Movies/>
            <Genres/>
            <hr/>
        </div>
    );
};

export {MoviesPage};