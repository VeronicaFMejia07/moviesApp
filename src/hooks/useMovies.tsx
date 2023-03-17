import React, { useEffect, useState } from 'react'
import movieDB from '../api/movieDB'
import { Movie, MovieDBResponse } from '../interfaces/movieInterface';

interface MoviesState {
    nowPlaying: Movie[];
    popular: Movie[];
    topRated: Movie[];
    upcoming: Movie[];
}
const useMovies = () => {

    const [isLoading, setIsLoading] = useState(true);

    //se tipa con la interfaz creada anteriormente, la cual contiene los metodos a los cuales se van a acceder en el ednpoint
    const [moviesState, setmoviesState] = useState<MoviesState>({
        nowPlaying: [], //como estado inicial
        popular: [],
        topRated: [],
        upcoming: []
    });

    const getMovies = async () => {
        const nowPlayingPromise = movieDB.get<MovieDBResponse>('/now_playing');//La petición va ser de tipo MovieDBNowPlaying(interfaz creada)
        const popularPromise = movieDB.get<MovieDBResponse>('/popular');
        const topRatedPromise = movieDB.get<MovieDBResponse>('/top_rated');
        const upcomingPromise = movieDB.get<MovieDBResponse>('/upcoming');

        //Sirve para ejecutar varias peticiones de forma simultanea (todas a la vez), este recibe una colección de promesas
        const response = await Promise.all( //Si una promesa falla todas van a fallar
            [nowPlayingPromise, 
                popularPromise, 
                topRatedPromise, 
                upcomingPromise
            ]
        );
            setmoviesState({ //se asignan los valores al state, accediendo a la coleccion de promesas  por posiciones el cual contiene la respuesta de la petición 
                nowPlaying: response[0].data.results,
                popular: response[1].data.results,
                topRated: response[2].data.results,
                upcoming: response[3].data.results ,
            })
        setIsLoading(false)
    }

    useEffect(() => {
        getMovies() //Peliculas actuales

    }, [])

    return {
        ...moviesState, //se obtienen cada una de las propiedades que tiene seteadas el setMoviesState
        isLoading,
        
    }
}

export default useMovies
