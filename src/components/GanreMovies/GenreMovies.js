import React, {useEffect} from 'react';
import {useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";

import {genreActions, getGenreMovies} from "../../store";
import {Loading, MovieCard, Paginator} from "../../components";
import css from './GenreMovies.module.css'

const GenreMovies = () => {

    const {genreMovies,status,currentPage, totalCount} = useSelector(state => state.genresRed);
    const {genreId} = useParams();
    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(getGenreMovies({genreId,currentPage}));

        }, [currentPage,genreId]);


    if (status==='good') {
        return (
            <div className={css.movies}>
                {genreMovies && genreMovies.map(movie => <MovieCard key={movie.id} movie={movie}/>)}
                <Paginator Action={genreActions} totalCount={totalCount} currentPage={currentPage}/>
            </div>
        );
    }
    return (
        <div>
            <Loading/>
        </div>
    );
};
export default GenreMovies;