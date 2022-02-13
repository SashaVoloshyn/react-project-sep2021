import React, {useEffect} from 'react';
import {useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";

import {genreActions, getGenreMovies} from "../../store";
import { MovieCard, Paginator} from "../../components";
import css from './GenreMovies.module.css'

const GenreMovies = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const {genreMovies,status,currentPage, totalCount} = useSelector(state => state.genresRed);
    const {genreId} = useParams();
    console.log(`genre id`,genreId)
    const dispatch = useDispatch();





    useEffect(() => {



        dispatch(getGenreMovies({genreId,currentPage}));
    }, [currentPage,genreId]);
    console.log(status);

    useEffect(() => {

        if (!searchParams.get('page')) {
            setSearchParams({page: '1'})
        }
        const page = searchParams.get('page');

        dispatch(genreActions.pagination({page}))

    }, [searchParams]);


    return (
        <div className={css.movies}>
            {genreMovies && genreMovies.map(movie => <MovieCard key={movie.id} movie={movie}/>)}
            <Paginator Action={genreActions} totalCount={totalCount} currentPage={currentPage}/>
        </div>
    );
};
export default GenreMovies;