import React from 'react'
import { Cast } from '../interfaces/creditsInterface'
import { Image, Text, View } from 'react-native';
import { styles } from '../styles/CastItemStyle';

interface IProps {
    actor: Cast
}

const CastItem = ({ actor }: IProps) => {
    const { name, character, profile_path } = actor;
    const urlImage = `https://image.tmdb.org/t/p/w500${profile_path}`
    return (
        <View style={styles.containerActor}>
            {
                profile_path ? <Image source={{ uri: urlImage }} style={styles.actorImage} />
                    : <></>
            }
            <View style={styles.actorDescription}>
                <Text style={styles.actorName}>{name}</Text>
                <Text style={styles.actorCharacter}>{character}</Text>
            </View>
        </View>
    )
}

export default CastItem
