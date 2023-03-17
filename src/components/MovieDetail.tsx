import React from 'react'
import { View, Text, FlatList } from 'react-native';
import { Cast } from '../interfaces/creditsInterface';
import { MovieFull } from '../interfaces/movieInterface';
import Icon from 'react-native-vector-icons/FontAwesome';
import { styles } from '../styles/MovieDetailStyle';
import currencyFormater from 'currency-formatter';
import CastItem from './CastItem';

interface IProps {
    movieFull: MovieFull;
    cast: Cast[]
}
const MovieDetail = ({ movieFull, cast }: IProps) => {
    const { vote_average, genres, overview, budget } = movieFull;
    return (
        <>
            {/*Detalles*/}
            <View style={{ marginHorizontal: 20 }}>
                <View style={styles.containerVote}>
                    <Icon name='star-o' size={20} color='pink' />
                    <Text>{vote_average}</Text>

                    <Text style={{ marginLeft: 5 }}>
                        - {
                            genres.map(item => item.name).join(',')
                        }
                    </Text>
                </View>

                {/*Historia de la pelicula */}
                <Text style={styles.title}>Historia</Text>
                <Text style={styles.description}>{overview}</Text>
                <Text style={styles.title}>Presupuesto</Text>
                <Text style={styles.description}>{currencyFormater.format(budget, { code: 'USD' })}</Text>
            </View>

            {/*Casting */}
            <View style={{ marginTop: 10, marginBottom: 100 }}>
                <Text style={[styles.title, { marginHorizontal: 20 }]}>Actores</Text>
                <FlatList
                    data={cast}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => <CastItem actor={item} />}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    style={styles.containerFlatList}
                />
            </View>

        </>
    )
}

export default MovieDetail
