import { KeyboardAvoidingView, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { GOOGLE_MAPS_APIKEY } from "@env";
import { setDestination } from '../slices/navSlice';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import NavFavourites from './NavFavourites';

const NavigateCard = () => {
    const dispatch = useDispatch();
    const navigate = useNavigation();
  return (
    <KeyboardAvoidingView style={tw`bg-white flex-1 rounded-t-3xl`}>
      <Text style={tw`text-center py-5 text-xl font-semibold`}
      >Good Morning, User!</Text>
      <View style={tw`border-t border-gray-200 flex-shrink`}>
        <KeyboardAvoidingView>
            <GooglePlacesAutocomplete
                placeholder='Where to?'
                nearbyPlacesAPI='GooglePlacesSearch'
                debounce={400}
                onPress={(data, details = null) => {
                    dispatch(
                        setDestination({
                          location: details?.geometry.location,
                          description: data.description,
                        })
                      );
                      navigate.navigate("RideOptionsCard");
                }}
                styles={toInputBoxStyles}
                fetchDetails={true}
                enablePoweredByContainer={false}
                minLength={2}
                query={{
                    key: GOOGLE_MAPS_APIKEY,
                    language: 'en'
                }}
            />
        </KeyboardAvoidingView>
        <NavFavourites />
      </View>
    </KeyboardAvoidingView>
  )
}

export default NavigateCard

const toInputBoxStyles = StyleSheet.create({
        container: {
            backgroundColor: 'white',
            paddingTop: 20,
            flex: 0,
        },
        textInput: {
            backgroundColor: '#DDDDDF',
            borderRadius: 0,
            fontSize: 18,
            borderRadius: 6,

        },
        textInputContainer: {
            paddingHorizontal: 20,
            paddingBottom: 0,
        }
})