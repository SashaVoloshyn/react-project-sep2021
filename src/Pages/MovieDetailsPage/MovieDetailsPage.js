import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Rating from "@mui/material/Rating";
import {useParams} from "react-router";

import {getMovieDetails} from "../../store";
import css from './MovieDetailsPage.module.css';


const MovieDetailsPage = () => {
    const {movieId} = useParams();
    const dispatch = useDispatch();
    const {status, movie} = useSelector(state => state.moviesRed);

    useEffect(() => {

        dispatch(getMovieDetails(movieId));

    }, []);

    if (status === 'movie-resolved') {

        const videos = movie.videos.results;
        const companies = movie.production_companies;
        const languages = movie.spoken_languages;
        const countries = movie.production_countries;

        return (
            <div>
                <div className={css.title}><h2>{movie.original_title}</h2></div>
                <div className={css.infoBlock}>
                    <div className={css.poster}>
                        <img src={`https://image.tmdb.org/t/p/w400/${movie.poster_path}`} alt={movie.title}/>
                    </div>
                    <div className={css.info}>
                        <div className={css.genre}><strong>Genres :</strong> {movie.genres && movie.genres.map(ganre => <span
                            className={css.genres} key={ganre.id}>{ganre.name}</span>)} </div>

                        {<div className={css.tagline}><strong>Tagline :</strong> <span>{movie.tagline}</span></div>}

                        <div className={css.relise}><strong>Relise :</strong> <span>{movie.release_date}</span></div>

                        <div className={css.time}><strong>Run Time :</strong> <span>{movie.runtime} mins</span></div>

                        <div className={css.status}><strong>Status :</strong> <span>{movie.status}</span></div>

                        <div className={css.homepage}><strong>Homepage :</strong> <span>{movie.homepage}</span></div>

                        <div className={css.languages}><strong>Languages :</strong> {languages &&languages.map((language, index) =>
                            <span
                                key={index}>{language.name}</span>)}</div>

                        <div className={css.countries}><strong>Countries :</strong> {countries &&countries.map((countri, index) =>
                            <span
                                key={index}>{countri.name}</span>)}</div>

                        <div className={css.companies}><strong>Companies :</strong> {companies &&companies.map(companie => <span
                            className={css.logo} key={companie.id}> {companie.logo_path &&<img
                            src={`https://image.tmdb.org/t/p/original/${companie.logo_path}`}
                            alt={companie.name}/>}</span>)}</div>

                        <div className={css.budget}><strong>Budget :</strong> <span>{movie.budget}</span></div>

                        <div className={css.revenue}><strong>Revenue :</strong> <span>{movie.revenue}</span></div>

                        <div className={css.rating}><strong>Rating : </strong> <span><Rating name="read-only"
                                                                                             defaultValue={movie.vote_average}
                                                                                             precision={0.5} max={10}
                                                                                             readOnly/></span></div>

                        <div className={css.overview}><strong>Overview :</strong> <span>{movie.overview}</span></div>
                    </div>
                </div>

                    <div className={css.videoCard}>
                        <div className={css.movie_h2}><h2>Movies</h2></div>

                        <div className={css.videos}>{videos.map((video, index) => <div key={index}>
                            <iframe width="400" height="300"
                                    src={`https://www.youtube.com/embed/${video.key}`}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen>
                            </iframe>
                        </div>)}</div>

                    </div>
            </div>
        );
    }


    return (
        <div className={css.loading}>

        </div>
    );
};

export {MovieDetailsPage};