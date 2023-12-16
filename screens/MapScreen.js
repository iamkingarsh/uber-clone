import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import Map from '../components/Map'
import { createStackNavigator } from '@react-navigation/stack'
import NavigateCard from '../components/NavigateCard'

const MapScreen = () => {
    const Stack = createStackNavigator();
    return (

        <View style={tw`h-full bg-white `} >

            <View style={tw` h-1/2 bg-red-100`}>

                <Map />
            </View>

            <View style={tw`h-1/2 bg-red-200`}>
                <Stack.Navigator>
                    <Stack.Screen
                        name="NavigateCard"
                        component={NavigateCard}

                        options={{
                            headerShown: false
                        }}

                    />
                    <Stack.Screen
                        name="RideOptionsCard"
                        component={NavigateCard}

                        options={{
                            headerShown: false
                        }}

                    />

                </Stack.Navigator>

            </View>

        </View>

    )
}

export default MapScreen