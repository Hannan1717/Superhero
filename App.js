import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
import TabBawah from './pages/BottomTab';
import DetailHero from './pages/DetailHero';
import Hero from './pages/Hero';
import Villain from './pages/Villain';
import DetailVillain from './pages/DetailVillain';
import About from './pages/About';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: true }}>
        <Stack.Screen name="Character" component={TabBawah} />
        <Stack.Screen name="Hero" component={Hero} />
        <Stack.Screen name="Detail Hero" component={DetailHero} />
        <Stack.Screen name="Villain" component={Villain} />
        <Stack.Screen name="Detail Villain" component={DetailVillain} />
        <Stack.Screen name="About" component={About} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
