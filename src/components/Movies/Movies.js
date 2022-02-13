import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";


import {MovieCard} from "../MovieCard/MovieCard";
import { getAllMovies, movieActions} from "../../store";
import {Paginator} from "../Paginator/Paginator";
import css from './Movies.module.css';


const Movies = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const {movies,  currentPage, totalCount} = useSelector(state => state.moviesRed);
    const dispatch = useDispatch();


    useEffect(() => {

        dispatch(getAllMovies(currentPage))


    }, [currentPage]);

    useEffect(() => {

        if (!searchParams.get('page')) {
            setSearchParams({page: '1'})
        }
        const page = searchParams.get('page');

        dispatch(movieActions.pagination({page}))

    }, []);


    return (
        <div className={css.movies}>
            {movies && movies.map(movie => <MovieCard movie={movie} key={movie.id}/>)}
            <Paginator currentPage={currentPage} totalCount={totalCount} Action={movieActions}/>

        </div>

    );
};

export {Movies};