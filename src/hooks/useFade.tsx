import React, { useRef } from 'react'
import { Animated } from 'react-native';

const useFade = () => {

    //La opacidad tendra el valor inicial en 0
    const obtainOpacity = useRef(new Animated.Value(0)).current; //Libreria animated que recibe el valor inicial en 0

    const fadeIn = (callback?:Function) => {
        Animated.timing( //tiempo de la animacion
            obtainOpacity, //el valor que va cambiar
            {
                toValue: 1, //que valor va tomar
                duration: 1000, //durante cuanto tiempo hará la animacion en milesimas de segundo
                useNativeDriver: true //Acelerado por hardware
            }
        ).start(() => callback ? callback : null); //Se dispara cuando la animacion termina
    }
    const fadeOut = (duration:number = 300) => {
        Animated.timing( //tiempo de la animacion
            obtainOpacity, //el valor que va cambiar
            {
                toValue: 0, //que valor va tomar
                duration: 1000, //durante cuanto tiempo hará la animacion en milesimas de segundo
                useNativeDriver: true //Acelerado por hardware
            }
        ).start(); //Se dispara cuando la animacion termina
    }

    return {
        obtainOpacity,
        fadeIn, 
        fadeOut
    }
}

export default useFade
