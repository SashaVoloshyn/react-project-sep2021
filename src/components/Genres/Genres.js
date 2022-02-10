import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";

import {getAllGenres} from "../../store";



const Genres = () => {
    const {genres} = useSelector(state => state.genresRed);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getAllGenres())
    },[])

    return (
        <div>
            {genres.map(genre => <h2 key={genre.id}><Link to={`/genres=${genre.id}/${genre.name}`}>{genre.name}</Link></h2>)}
        </div>
    );
};

export {Genres};