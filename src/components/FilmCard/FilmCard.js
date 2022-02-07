import React from 'react';

const FilmCard = ({film}) => {
    return (
        <div>
            {film.id}
            {film.adult}

        </div>
    );
};

export {FilmCard};