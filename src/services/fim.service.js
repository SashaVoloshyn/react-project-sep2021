import {axiosService} from "./axios.service";
import {urls} from "../constants/urls";

export const filmService={
    getAll: () => axiosService.get(urls.discover).then(value => value.data)

}