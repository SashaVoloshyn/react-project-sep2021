import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";


import {MovieCard} from "../MovieCard/MovieCard";
import {getAllMovies, movieActions} from "../../store";
import {Paginator} from "../Paginator/Paginator";


const Movies = () => {
    const {movies, data, currentPage, totalCount} = useSelector(state => state.moviesRed);
    const dispatch = useDispatch();
    // let img = [];


    // createPages(img,totalCount,currentPage)


    useEffect(() => {

        dispatch(getAllMovies(currentPage))


    }, [currentPage])

    return (
        <div>
            {movies && movies.map(movie => <MovieCard movie={movie} key={movie.id}/>)}
            <Paginator currentPage={currentPage} totalCount={totalCount} Action={movieActions}/>

        </div>

    );
};

export {Movies};