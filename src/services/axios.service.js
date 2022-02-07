import axios from 'axios';

import {baseURL} from "../constants/urls";

export const axiosService = axios.create({
    baseURL,
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMzljZjExM2MzNzM0Zjg4NGE1ODBiZDRjNWFlMTg' +
            '0MyIsInN1YiI6IjYxZmZkNTBlY2Y0YjhiMDA0Mjc5ZWI3YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ' +
            '.d8LGnB5RTjcRXOuL0noBdWBhBCA7t1KYBTb5p47n3g0'
    }
});