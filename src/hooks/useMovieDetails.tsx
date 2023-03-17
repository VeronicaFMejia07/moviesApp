import React, { useEffect, useState } from 'react'
import movieDB from '../api/movieDB';
import { Cast, CreditsResponse } from '../interfaces/creditsInterface';
import { MovieFull } from '../interfaces/movieInterface';

interface MovieDetails {
    isLoading: boolean,
    movieFull?: MovieFull;
    cast: Cast[],
}

const useMovieDetails = (movieId: number) => {
    const [state, setState] = useState<MovieDetails>({
        isLoading: true, //estado inicial
        movieFull: undefined,
        cast: []
    });

    const getMovieDetils = async () => {
        const movieDetailPromise = movieDB.get<MovieFull>(`/${movieId}`);
        const creditsPromise = movieDB.get<CreditsResponse>(`/${movieId}/credits`);

        //Se desestructua la respuesta que va dar la promesa
        const [movieDetailResponse, castPromiseResponse] = await Promise.all(
            [
                movieDetailPromise, creditsPromise
            ]
        )

        //seteo del estado
        setState({
            isLoading: false,
            movieFull: movieDetailResponse.data, //asigno al estado la respuesta de las promesas
            cast: castPromiseResponse.data.cast
        })

    }

    useEffect(() => {
        getMovieDetils();
    }, [])

    return {
        ...state, //asigno las propiedades de forma individual al estado
    }
}

export default useMovieDetails
