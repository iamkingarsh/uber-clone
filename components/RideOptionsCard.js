import { FlatList, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import tw from 'tailwind-react-native-classnames'
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
import {  selectTravelTimeInformation } from '../slices/navSlice'
import { useSelector } from 'react-redux'

const RideOptionsCard = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(null);
  const travelTimeInformation = useSelector(selectTravelTimeInformation)
  const SURGE_CHARGE_RATE = 1.5;

  useEffect(() => {
    console.log(travelTimeInformation)
  } , [travelTimeInformation])


  const data = [
    {
      id: "Uber-X-123",
      title: "UberX",
      multiplier: 1,
      image: "https://links.papareact.com/3pn",
    },
    {
      id: "Uber-XL-456",
      title: "Uber XL",
      multiplier: 1.2,
      image: "https://links.papareact.com/5w8",
    },
    {
      id: "Uber-LUX-789",
      title: "Uber LUX",
      multiplier: 1.75,
      image: "https://links.papareact.com/7pf",
    }
  ]

  //convert distance in miles to km
  const distanceInMiles = travelTimeInformation?.distance?.text?.split(" ")[0];
  const distanceInMilesRound = Math.round(distanceInMiles * 1.60934);
  const convertedDistance = distanceInMiles * 1.60934;

  //convert distance in km to 2 decimal places
  const convertedDistanceRound = convertedDistance.toFixed(2);

  

  return (
    <SafeAreaView style={tw`bg-white flex-1 rounded-t-3xl`} >
      <View>
        <TouchableOpacity
          style={tw`absolute top-3 left-5 z-50 p-2 rounded-full`}
          onPress={() => navigation.goBack()}
        >
          <Icon name="chevron-left" size={30} type="fontawesome" />
        </TouchableOpacity>
        <Text style={tw`text-center py-5 text-xl font-semibold`}
        >Select a Ride - {convertedDistanceRound} km</Text>
      </View>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item: { id, title, multiplier, image }, item }) => (
          <TouchableOpacity style={tw`flex-row  rounded-xl justify-between items-center px-8 ${selected?.id === id ? 'bg-gray-200' : 'bg-white'}`}
          onPress={() => setSelected(item)}
          >
            <Image
              style={{
                width: 100,
                height: 100,
                resizeMode: "contain"
              }}
              source={{ uri: image }}
            />
            <View style={tw`-ml-6 `}>
              <Text style={tw`text-xl font-semibold`}>{title}</Text>
              <Text>{travelTimeInformation?.duration?.text}</Text>
            </View>
            <Text style={tw`text-xl`}>
              {
                new Intl.NumberFormat('en-in', {
                  style: 'currency',
                  currency: 'INR'
                }).format((travelTimeInformation?.distance.value * SURGE_CHARGE_RATE * multiplier) / 100)
              }
            </Text>
          </TouchableOpacity>
        )}
        />
        <View>
          <TouchableOpacity disabled={!selected} style={tw`bg-black py-3 m-3 rounded-xl ${!selected && 'bg-gray-300'}`}>
            <Text style={tw`text-center text-white font-bold text-xl`}>Pay  { selected?.multiplier &&
                new Intl.NumberFormat('en-in', {
                  style: 'currency',
                  currency: 'INR'
                }).format((travelTimeInformation?.distance.value * SURGE_CHARGE_RATE * selected?.multiplier) / 100)
              }</Text>
          </TouchableOpacity>
        </View>
    </SafeAreaView>

  )
}

export default RideOptionsCard

const styles = StyleSheet.create({})