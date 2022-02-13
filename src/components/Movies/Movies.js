import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";


import {MovieCard} from "../MovieCard/MovieCard";
import { getAllMovies, movieActions} from "../../store";
import {Paginator} from "../Paginator/Paginator";
import css from './Movies.module.css';


const Movies = () => {
    const {movies,  currentPage, totalCount} = useSelector(state => state.moviesRed);
    const dispatch = useDispatch();


    useEffect(() => {

        dispatch(getAllMovies(currentPage))


    }, [currentPage]);



    return (
        <div className={css.movies}>
            {movies && movies.map(movie => <MovieCard movie={movie} key={movie.id}/>)}
            <Paginator currentPage={currentPage} totalCount={totalCount} Action={movieActions}/>

        </div>

    );
};

export {Movies};