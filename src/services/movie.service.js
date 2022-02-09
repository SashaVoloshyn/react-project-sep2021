import {axiosService} from "./axios.service";
import {urls} from "../constants/urls";

export const movieService = {
    getAll: () => axiosService.get(urls.discover).then(value => value.data.results),
    getMovie: (movieId) => axiosService.get(`${urls.movieURL}/${movieId}`).then(value => value.data.results)
};