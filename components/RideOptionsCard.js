import { FlatList, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import tw from 'tailwind-react-native-classnames'
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'

const RideOptionsCard = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(null);

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
        >Select a Ride</Text>
      </View>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item: { id, title, multiplier, image }, item }) => (
          <TouchableOpacity style={tw`flex-row mx-4 my-1 rounded-xl justify-between items-center px-10 ${selected === id ? 'bg-gray-200' : 'bg-white'}`}
          onPress={() => setSelected(id)}
          >
            <Image
              style={{
                width: 100,
                height: 100,
                resizeMode: "contain"
              }}
              source={{ uri: image }}
            />
            <View style={tw`-ml-6`}>
              <Text style={tw`text-xl font-semibold`}>{title}</Text>
              <Text>Travel Time...</Text>
            </View>
            <Text style={tw`text-xl`}>$99</Text>
          </TouchableOpacity>
        )}
        />
      
    </SafeAreaView>

  )
}

export default RideOptionsCard

const styles = StyleSheet.create({})