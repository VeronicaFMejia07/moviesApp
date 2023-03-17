import React from 'react'
import { View, Text, Image, ScrollView, ActivityIndicator, TouchableOpacity  } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParams } from '../navigation/StackNavigation';
import { styles } from '../styles/DetailScreenStyle';
import { Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import useMovieDetails from '../hooks/useMovieDetails';
import MovieDetail from '../components/MovieDetail';

//Primero se coloca el tipo que se definio para las rutas y segundo el componente en el que me encuentro
interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'> { };

const { height: screenHeight } = Dimensions.get('screen');

const DetailScreen = ({ route, navigation }: Props) => {
  const movie = route.params;
  const { poster_path, original_title, title, id } = movie;
  const uriImage = `https://image.tmdb.org/t/p/w500${poster_path}`;

  const { isLoading, movieFull, cast } = useMovieDetails(id)

  if (isLoading) {

  }
  return (
    <ScrollView>
      {/*Toma el height que tiene la pantalla e indica que de ese height el contenedor va ocupar el 70%*/}
      <View style={[styles.containerPost, { height: screenHeight * 0.7 }]}>
        <View style={styles.imageBorder}>
          <Image source={{ uri: uriImage }} style={styles.post} />
        </View>
      </View>

      <View style={styles.containerTitle}>
        <Text style={styles.subtitle}>{original_title}</Text>
        <Text style={styles.title}>{title}</Text>
      </View>


      {isLoading ? <ActivityIndicator size={30} color='red' style={{ marginTop: 20 }} />
        : <MovieDetail movieFull={movieFull!} cast={cast}/>
      }

      {/**Boton para cerrar */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.pop()}>
      <Icon name='arrow-left' color={'white'} size={40} />

      </TouchableOpacity>

    </ScrollView>
  )
}

export default DetailScreen
