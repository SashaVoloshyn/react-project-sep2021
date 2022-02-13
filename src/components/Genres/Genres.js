import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";

import {getAllGenres} from "../../store";
import css from './Genres.module.css'



const Genres = () => {
    const {genres} = useSelector(state => state.genresRed);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getAllGenres())
    },[])

    return (
        <div className={css.genres}>
            {genres && genres.map(genre => <Link to={`/genres=${genre.id}/${genre.name}`}><div key={genre.id}>{genre.name}<hr/></div></Link>)}
        </div>
    );
};

export {Genres};