import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {Provider, useSelector} from 'react-redux'
import store from './store';
import HomeScreen from './screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MapScreen from './screens/MapScreen';
import EatsScreen from './screens/EatsScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
            // headerBlurEffect: 'extraLight',
            // headerTintColor: '#000',
            // headerBackTitle : 'Back',
            // headerLargeTitle: true,
            // headerTitle: 'Taxi App',
            // headerLargeTitleShadowVisible: false,
            // headerShadowVisible: false,
          }}
          />
          <Stack.Screen
          name="MapScreen"
          component={MapScreen}
          options={{
            headerShown: false,
            headerBlurEffect: ' light',
            headerTintColor: '#000',
            headerBackTitle : 'Back',
            headerLargeTitle: true,
            headerTitle: 'Get a ride',
            // headerLargeTitleShadowVisible: false,
            headerShadowVisible: false,
          }}
          />
          <Stack.Screen
          name="EatsScreen"
          component={EatsScreen}
          options={{
            headerShown: false,
            headerBlurEffect: 'extraLight',
            headerTintColor: '#000',
            headerBackTitle : 'Back',
            headerLargeTitle: true,
            headerTitle: 'Taxi App',
            headerLargeTitleShadowVisible: false,
            headerShadowVisible: false,
          }}
            
          />
         
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar animated  style='auto' />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
