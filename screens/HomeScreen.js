import { View, Text, SafeAreaView, Image, StyleSheet, Appearance, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import tw from 'tailwind-react-native-classnames'
import { useNavigation } from '@react-navigation/native'
import NavOptions from '../components/NavOptions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch } from 'react-redux';
import { setDestination, setOrigin } from '../slices/navSlice';
import NavFavourites from '../components/NavFavourites';

const colorScheme = Appearance.getColorScheme();
const isDarkMode = colorScheme === 'dark';
const HomeScreen = () => {
    const dispatch = useDispatch();



    return (

        <SafeAreaView style={tw`bg-gray-100 h-full p-4`}>
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


                    <GooglePlacesAutocomplete
                        nearbyPlacesAPI='GooglePlacesSearch'
                        debounce={400}
                        placeholder='Where From?'
                        enablePoweredByContainer={false}
                        minLength={2}
                        fetchDetails={true}
                      
                        
                        onPress={(data, details ) => {

                            dispatch(setOrigin({
                                location: details.geometry.location,
                                description: data.description
                            }));
                            dispatch(setDestination(null));

                        }}



                        styles={{

                            container: {
                                flex: 0,
                                marginLeft: 9,
                                marginRight: 9,
                            },
                            textInput: {
                                fontSize: 16,
                            },
                           

                        }}
                        
                        query={{
                            key: GOOGLE_MAPS_APIKEY,
                            language: 'en',
                        }}
                        
                    />


                    <NavOptions />
                    <NavFavourites />
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

