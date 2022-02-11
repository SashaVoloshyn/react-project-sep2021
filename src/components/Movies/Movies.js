import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";


import {MovieCard} from "../MovieCard/MovieCard";
import {getAllMovies, movieActions} from "../../store";
import css from "./Movies.module.css";
import {createPages} from "../func";



const Movies = () => {
    const {movies, data, currentPage,totalCount} = useSelector(state => state.moviesRed);
    const dispatch = useDispatch();
    let pages = [];


    createPages(pages,totalCount,currentPage)


    useEffect(() => {

        dispatch(getAllMovies(currentPage))


    }, [currentPage])

    return (
        <div>
            {movies && movies.map(movie => <MovieCard movie={movie} key={movie.id}/>)}
            <div className={css.pages}>{pages.map((page, index) => <span className={css.page} key={index}
                                                                         onClick={() => dispatch(movieActions.pagination({page}))}

            >{page}</span>)}</div>

        </div>

    );
};

export {Movies};