import {axiosService} from "./axios.service";
import {urls} from "../constants/urls";

export const genreService = {
    getAll: () => axiosService.get(urls.movieGenres).then(value => value.data.genres),
    getGenreMovies: (genreId) => axiosService.get(`${urls.genreMovies}${genreId}`).then(value => value.data),
};