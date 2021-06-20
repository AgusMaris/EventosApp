import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import NewEventScreen from './screens/NewEventScreen';
import EventScreen from './screens/EventScreen';
import { EventosContextProvider } from './context/EventosContext';

const Stack = createStackNavigator();

function App() {
  return (
    <EventosContextProvider>
      <NavigationContainer>
        <Stack.Navigator >
          <Stack.Screen name="Mis Movimientos" component={HomeScreen} options={{ headerTitleAlign: 'center' }} />
          <Stack.Screen name="Nuevo Evento" component={NewEventScreen} options={{ headerTitleAlign: 'center' }} />
          <Stack.Screen name="Event" component={EventScreen} options={{ headerTitleAlign: 'center' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </EventosContextProvider>
  );
}

export default App;