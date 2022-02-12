import React, {useEffect} from 'react';
import {useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";

import {genreActions, getGenreMovies} from "../../store";
import {Genres, MovieCard, Paginator} from "../../components";

const GenreMovies = () => {
    const {genreMovies,status,currentPage, totalCount} = useSelector(state => state.genresRed);
    const {genreId} = useParams();
    console.log(`genre id`,genreId)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getGenreMovies({genreId,currentPage}));
    }, [currentPage,genreId]);
    console.log(status);


    return (
        <div>
            {genreMovies && genreMovies.map(movie => <MovieCard key={movie.id} movie={movie}/>)}
            <Paginator Action={genreActions} totalCount={totalCount} currentPage={currentPage}/>
        </div>
    );
};
export default GenreMovies;