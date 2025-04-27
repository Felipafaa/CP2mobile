import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TelaHome from '../Telas/TelaHome';
import TelaPerfil from '../Telas/TelaPerfil';
import TelaDetalhes from '../Telas/TelaDetalhes';

const Stack = createStackNavigator();

export default function StackNavigation() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#780606',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen name="Home" component={TelaHome} />
      <Stack.Screen name="Perfil" component={TelaPerfil} />
      <Stack.Screen name="Detalhes" component={TelaDetalhes} />
    </Stack.Navigator>
  );
}
