import { View, Text, SafeAreaView, Image, StyleSheet, Appearance, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import tw from 'tailwind-react-native-classnames'
import { useNavigation } from '@react-navigation/native'
import NavOptions from '../components/NavOptions';

const colorScheme = Appearance.getColorScheme();
const isDarkMode = colorScheme === 'dark';
const HomeScreen = () => {
    const navigation = useNavigation()


    return (

        <SafeAreaView style={tw`bg-white h-full p-4`}>
            <View style={tw`p-4`}>

                <View >
                    <Image
                        source={{
                            uri: "https://links.papareact.com/gzs"
                        }}
                        style={{
                            width: 100, height: 100, resizeMode: 'contain', marginLeft: 10
                        }}
                    />
                </View>
                <View>
                    <NavOptions />
                </View>
            </View>

        </SafeAreaView>


    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: isDarkMode ? '#070707' : '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default HomeScreen

