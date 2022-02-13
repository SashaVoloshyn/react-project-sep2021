import {Route, Routes, Navigate} from "react-router-dom";

import './App.css';
import {Layout} from "./components";
import {GenrePageMovies, MovieDetailsPage, MoviesPage, TopMoviesPage} from "./Pages";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index element={<Navigate to={'/movies'}/>}/>

                    <Route path={'movies'} element={<MoviesPage/>}/>
                    <Route path={'movies/:movieId/:name'} element={<MovieDetailsPage/>}/>
                    <Route path={'topMovies'} element={<TopMoviesPage/>}/>

                    <Route path={'genres=:genreId/:name'} element={<GenrePageMovies/>}/>


                </Route>
            </Routes>

        </div>
    );
}

export default App;
