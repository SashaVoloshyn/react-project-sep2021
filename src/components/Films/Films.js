import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {FilmCard} from "../FilmCard/FilmCard";
import {getAllFilms} from "../../store";

const Films = () => {
    const {films} = useSelector(state => state.filmsRed);
    const dispatch = useDispatch();
    console.log(films)



    useEffect(()=>{
        dispatch(getAllFilms())
    },[])

    return (
        <div>
            {films.map(film=><FilmCard film={film} key={film.id}/>)}
        </div>
    );
};

export {Films};