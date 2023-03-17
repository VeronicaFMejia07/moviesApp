import React, { useContext, useEffect } from 'react'
import { Animated, StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { GradientContext } from '../context/GradientContext';
import useFade from '../hooks/useFade';

interface IProps {
  children: JSX.Element | JSX.Element[]
}

//Recibe los hijos
const GradientBackground = ({ children }: IProps) => {

  const { colors, previousColors, setPreviousMainColors } = useContext(GradientContext);
  const { obtainOpacity, fadeIn, fadeOut } = useFade();

  useEffect(() => {
    fadeIn(() => {
      setPreviousMainColors(colors); //colores del gradiente de atras
      fadeOut()
    })
  }, [colors])

  return (
    <View style={{ flex: 1 }}>
      <LinearGradient
        colors={[previousColors.primary, previousColors.secondary, 'white']}
        style={{ ...StyleSheet.absoluteFillObject }}
        start={{ x: 0.1, y: 0.1 }} //donde va comenzar el gradiente en el eje x y y
        end={{ x: 0.5, y: 0.6 }} //donde va terminar el gradiente en el eje x y y
      />

      <Animated.View style={{ ...StyleSheet.absoluteFillObject, opacity: obtainOpacity }}>
        <LinearGradient
          colors={[colors.primary, colors.secondary, 'white']}
          style={{ ...StyleSheet.absoluteFillObject }}
          start={{ x: 0.1, y: 0.1 }} //donde va comenzar el gradiente en el eje x y y
          end={{ x: 0.5, y: 0.6 }} //donde va terminar el gradiente en el eje x y y
        />
      </Animated.View>
      {children}
    </View>
  )
}

export default GradientBackground
