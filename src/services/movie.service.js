import {axiosService} from "./axios.service";
import {urls} from "../constants/urls";

export const movieService = {
    getAll: (counter) => axiosService.get(urls.discover,{params:{page: counter}}).then(value => value.data),
    getMovie: (movieId) => axiosService.get(`${urls.movieURL}/${movieId}?append_to_response=videos,images`).then(value => value.data),
    getTopMovie:(counter)=>axiosService.get(urls.topMovie,{params:{page: counter}}).then(value => value.data),
};