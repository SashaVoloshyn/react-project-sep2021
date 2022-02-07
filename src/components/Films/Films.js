import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {getAllFilms} from "../../store/slices/filmSlice";
import {FilmCard} from "../FilmCard/FilmCard";

const Films = () => {
    const dispatch = useDispatch();
    const {films} = useSelector(state => state.filmsRed);

    useEffect(()=>{
        dispatch(getAllFilms())
    },[])

    return (
        <div>
            {console.log(films)}
        </div>
    );
};

export {Films};