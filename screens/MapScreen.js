import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import Map from '../components/Map'
import { createStackNavigator } from '@react-navigation/stack'
import NavigateCard from '../components/NavigateCard'
import RideOptionsCard from '../components/RideOptionsCard'
import { useSelector } from 'react-redux'
import { selectDestination } from '../slices/navSlice'

const MapScreen = () => {
    const Stack = createStackNavigator();
    const destination = useSelector(selectDestination)
    return (

        <View style={tw`h-full bg-white `} >

            <View style={tw`  ${destination ? 'h-1/2' : 'h-2/6'}  bg-red-100`}>

                <Map />
            </View>

            <View style={tw`${destination ? 'h-1/2' : 'h-4/6'}  rounded-t-3xl`}>
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
                        component={RideOptionsCard}
                        options={{
                            headerShown: false,
                           
                        }}

                    />

                </Stack.Navigator>

            </View>

        </View>

    )
}

export default MapScreen