import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import Map from '../components/Map'

const MapScreen = () => {
    return (

        <View style={tw`h-full bg-white `} >

            <View style={tw` h-1/2 bg-red-100`}>

                <Map />
            </View>

            <View style={tw`p-4 h-1/2 bg-red-200`}>

            </View>

        </View>

    )
}

export default MapScreen