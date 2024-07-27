import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigation from './src/navigation/AppNavigation';

export default function App() {
  return (
    <NavigationContainer>
    <AppNavigation/>
    </NavigationContainer>
  );
}