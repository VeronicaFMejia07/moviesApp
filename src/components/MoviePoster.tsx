import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { Movie } from '../interfaces/movieInterface';
import { styles } from '../styles/MoviePosterStyle';
import { useNavigation } from '@react-navigation/core';
import { CommonActions } from '@react-navigation/native';

interface IProps {
  movie: Movie;
  width?: number;
  height?: number

}

const MoviePoster = ({ movie, width = 300, height = 420 }: IProps) => {
  const { title, poster_path } = movie;
  const uriImage = `https://image.tmdb.org/t/p/w500${poster_path}`;
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.dispatch(
      CommonActions.navigate({ name: 'DetailScreen', params: movie })
    )} activeOpacity={0.7} style={{ width, height, marginHorizontal: 2, paddingBottom: 20, paddingHorizontal: 7 }}>
      <View style={styles.containerImage}>
        <Image source={{ uri: uriImage }} style={styles.image} />
      </View>
    </TouchableOpacity>
  )
}

export default MoviePoster
