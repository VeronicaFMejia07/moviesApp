import React from 'react'
import { Movie } from '../interfaces/movieInterface';
import { View, Text, FlatList } from 'react-native';
import MoviePoster from './MoviePoster';
import { styles } from '../styles/HorizontalSliderStyle';

interface IProps {
    title?: string;
    movies: Movie[];
}

const HorizontalSlider = ({ title, movies }: IProps) => {
    return (
        <View style={{height: (title) ? 260 : 220}}>
            {
                title ?   <Text style={styles.titleMovies}>{title}</Text> : <></>
            }

            <FlatList
                data={movies}
                renderItem={({ item }: any) => <MoviePoster movie={item} width={140} height={200} />}
                keyExtractor={(item) => item.id.toString()}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

export default HorizontalSlider
