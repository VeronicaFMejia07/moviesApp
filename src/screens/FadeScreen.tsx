import React, { useRef } from 'react'
import { View, Animated, Button } from 'react-native';
import useFade from '../hooks/useFade';

const FadeScreen = () => {

   const { obtainOpacity, fadeIn, fadeOut } = useFade();

    return (
        <View style={{ flex: 1, backgroundColor: 'pink', justifyContent: 'center', alignItems: 'center' }}>
            <Animated.View style={{ backgroundColor: 'green', width: 150, height: 150, borderColor: 'black', borderWidth: 10, opacity: obtainOpacity }} />
            <Button title='FadeIn' onPress={() => fadeIn()} />
            <Button title='FadeOut' onPress={() => fadeOut()} />
        </View>
    )
}

export default FadeScreen
