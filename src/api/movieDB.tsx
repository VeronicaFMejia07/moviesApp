import axios from "axios";

//Crear y configurar la estructura de las peticiones que apuntan a movie
const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: { //Se envian los parametros de acuerdo a los headers que debe tener la peticion
        api_key: '5bb125e674120953ab74574db10bb7c3',
        language: 'es-ES'
    }
})

export default movieDB;