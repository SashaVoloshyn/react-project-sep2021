import React from 'react';

const FilmCard = ({film}) => {
    return (
        <div>
            {film.original_title}
            <img src={`https://image.tmdb.org/t/p/w200/${film.poster_path}`} alt={film.title}/>
        </div>
    );
};

export {FilmCard};