import React, { useContext, useEffect } from 'react'
import { View, ActivityIndicator, Text, ScrollView } from 'react-native';
import useMovies from '../hooks/useMovies';
import MoviePoster from '../components/MoviePoster';
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Carousel from 'react-native-snap-carousel';
import { Dimensions } from 'react-native';
import { styles } from '../styles/HomeScreenStyle';
import HorizontalSlider from '../components/HorizontalSlider';
import GradientBackground from '../components/GradientBackground';
import { getColors } from '../helpers/getColors';
import { GradientContext } from '../context/GradientContext';

const { width: windowWidth } = Dimensions.get('window');

const HomeScreen = () => {

    const { nowPlaying, popular, topRated, upcoming, isLoading } = useMovies();
    const { top } = useSafeAreaInsets(); //proporciona unos valores por defecto para acomodar el contenido de forma adecuada separandolo del notch
    const { setMainColors } = useContext(GradientContext);

    const getPosterColors = async (index: number) => {
        const movie = nowPlaying[index];
        const uriImage = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

        //en caso de que los colores sean nulos se le asignan valores por defecto
        const [primary = 'pink', secondary = 'white'] = await getColors(uriImage) //Se llama el helper y se le envia la url, se desestructuran las variables a utilizar

        setMainColors({ primary, secondary })
    }

    useEffect(() => {
        if (nowPlaying.length > 0) { //si ya hay una pelicula
            getPosterColors(0) //obtenga los colores de la pelicula que esta en la posicion 0
        }
    }, [nowPlaying]) //Cada que cambie la pelicula 

    if (isLoading) {
        {/*Icono de cargando*/ }
        return <View>
            <ActivityIndicator color='red' size={50} />
        </View>
    }

    return (
        <GradientBackground>
            <ScrollView>
                <View style={{ marginTop: top + 20 }}>

                    {/* Carousel de peliculas en cartelera*/}
                    <View style={styles.containerCarousel}>
                        <Carousel
                            data={nowPlaying}
                            renderItem={({ item }: any) => <MoviePoster movie={item} />} //Se extrae el item para que muestre todas las imagenes de la data
                            sliderWidth={windowWidth} ///ancho del carrousel
                            itemWidth={300} //ancho entre cada item del carrousel
                            inactiveSlideOpacity={0.9} //la opacidad de los items inactivos 
                            onSnapToItem={index => getPosterColors(index)} //indica el elemento actual que se esta viendo
                        />
                    </View>

                    <HorizontalSlider title='Populares' movies={popular} />
                    <HorizontalSlider title='Mejor calificadas' movies={topRated} />
                    <HorizontalSlider title='Proximamente' movies={upcoming} />
                </View>
            </ScrollView>
        </GradientBackground>
    )
}

export default HomeScreen
