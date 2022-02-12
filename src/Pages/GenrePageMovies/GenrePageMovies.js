import React from 'react';
import GenreMovies from "../../components/GanreMovies/GenreMovies";
import {Genres} from "../../components";

const GenrePageMovies = () => {
    return (
        <div>
            <GenreMovies/>
            <Genres/>
        </div>
    );
};



export  {GenrePageMovies};