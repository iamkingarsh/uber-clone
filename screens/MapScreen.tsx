import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'

const MapScreen = () => {
    return (
        <ScrollView style={tw`h-full bg-white p-4`}>
            <SafeAreaView >
                <Text>MapScreen</Text>
            </SafeAreaView>
        </ScrollView>
    )
}

export default MapScreen