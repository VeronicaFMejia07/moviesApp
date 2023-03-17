import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import 'react-native-gesture-handler';
import { GradientProvider } from './src/context/GradientContext';
import StackNavigation from './src/navigation/StackNavigation';


const AppState = ({ children }: any) => { //ESTA TODO EL CONTEXT, TODOS LOS HIJOS
  return (
    <GradientProvider>
      {children}
    </GradientProvider>
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <StackNavigation />
      </AppState>
    </NavigationContainer>
  )
}

export default App
