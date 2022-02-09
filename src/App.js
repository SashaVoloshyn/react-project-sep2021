import {Route, Routes, Navigate} from "react-router-dom";



import './App.css';
import {Layout} from "./components";
import {MovieDetailsPage, MoviesPage} from "./Pages";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={'/'} element={<Layout/>}>
          <Route index element={<Navigate to={'movies'}/>}/>

          <Route path={'/movies'} element={<MoviesPage/>}/>
          <Route path={'movies/:movieId'} element={<MovieDetailsPage/>}/>



        </Route>
      </Routes>

    </div>
  );
}

export default App;
