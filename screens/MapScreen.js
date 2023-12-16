import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import Map from '../components/Map'
import { createStackNavigator } from '@react-navigation/stack'
import NavigateCard from '../components/NavigateCard'
import RideOptionsCard from '../components/RideOptionsCard'
import { useSelector } from 'react-redux'
import { selectDestination, setDestination, setOrigin, setTravelTimeInformation } from '../slices/navSlice'
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'

const MapScreen = () => {
    const Stack = createStackNavigator();
    const destination = useSelector(selectDestination)
    const navigation = useNavigation();

    return (

        <View style={tw`h-full bg-white `} >

            <View style={tw`  ${destination ? 'h-1/2' : 'h-2/6'}  bg-red-100`}>
                <TouchableOpacity style={tw`bg-gray-100 absolute top-16 left-8 z-50 p-3 rounded-full shadow-lg`}
               onPress={() => {
                   setOrigin(null);
                   setDestination(null);
                   setTravelTimeInformation(null);
                   navigation.navigate("Home");
            }}
               >
                    <Icon name="chevron-left"  size={18} type="feather" />
                </TouchableOpacity>
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