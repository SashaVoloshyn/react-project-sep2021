import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router";

import {getMovieDetails} from "../../store";

const MovieDetailsPage = () => {
    const {movieId} = useParams();
    const dispatch = useDispatch();
    const {status,movie} = useSelector(state => state.moviesRed);



    useEffect(() => {
        dispatch(getMovieDetails(movieId));
    }, []);
    console.log('status-------',status);
    console.log('movie------',movie);
    if (status === 'good') {

        const videos = movie.videos.results[0].key;
        // console.log(videos);
        return (
            <div>
                <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt={movie.title}/>
                <iframe width="330" height="200"
                        src={`https://www.youtube.com/embed/${videos}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                </iframe>
            </div>
        );
        // adult: false
        // backdrop_path: "/iQFcwSGbZXMkeyKrxbPnwnRo5fl.jpg"
        // belongs_to_collection: {id: 531241, name: "Spider-Man (Avengers) Collection", poster_path: "/nogV4th2P5QWYvQIMiWHj4CFLU9.jpg",…}
        // budget: 200000000
        // genres: [{id: 28, name: "Action"}, {id: 12, name: "Adventure"}, {id: 878, name: "Science Fiction"}]
        // homepage: "https://www.spidermannowayhome.movie"
        // id: 634649
        // images: {backdrops: [,…], logos: [,…], posters: [,…]}
        // imdb_id: "tt10872600"
        // original_language: "en"
        // original_title: "Spider-Man: No Way Home"
        // overview: "Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man."
        // popularity: 12335.96
        // poster_path: "/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg"
        // production_companies: [,…]
        // production_countries: [{iso_3166_1: "US", name: "United States of America"}]
        // release_date: "2021-12-15"
        // revenue: 1775000000
        // runtime: 148
        // spoken_languages: [{english_name: "English", iso_639_1: "en", name: "English"},…]
        // status: "Released"
        // tagline: "The Multiverse unleashed."
        // title: "Spider-Man: No Way Home"
        // video: false
        // videos: {results: [,…]}
        // vote_average: 8.4
        // vote_count: 7372


    }

    return (
        <div>
            {/*<video src={`https://www.youtube.com/watch?v=${videos}`}></video>*/}
        </div>
    );
};

export {MovieDetailsPage};