import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView  } from 'react-native';
import {Provider, useSelector} from 'react-redux'
import store from './store';
import HomeScreen from './screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MapScreen from './screens/MapScreen';
import EatsScreen from './screens/EatsScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      
      <NavigationContainer>
        <SafeAreaProvider>
          <KeyboardAvoidingView style={{flex: 1}} behavior='padding' keyboardVerticalOffset={Platform.OS === 'ios' ? -64 : 0}>

          
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
        </KeyboardAvoidingView>
        </SafeAreaProvider>
      </NavigationContainer>
      <StatusBar animated  style='auto' />
    </Provider>
  );
}


