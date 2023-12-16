import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements'
import tw from 'tailwind-react-native-classnames'

const NavFavourites = () => {
    const data = [
        {
            id: "123",
            icon: "home",
            location: "Home",
            destination: "Code Street, London, UK"
        },
        {
            id: "456",
            icon: "briefcase",
            location: "Work",
            destination: "London Eye, London, UK"
        },
    ]
    
  return (
    <View>

    <FlatList   
    data={data}
    keyExtractor={(item) => item.id}
    ItemSeparatorComponent={() => (
        <View style={[tw`bg-gray-200`, {height: 0.5}]}/>

      )}
    renderItem={({item: {location, destination, icon}}) => (
        <TouchableOpacity style={tw`flex-row items-center p-4`}>
          
                <Icon 
                style={tw`mr-4 rounded-full bg-gray-800 p-3`}
                name={icon}
                type="ionicon"
                color="white"
                size={18}
                />
     
            <View >
                <Text style={tw`font-semibold text-lg`}>{location}</Text>
                <Text style={tw`text-gray-500`}>{destination}</Text>
            </View>
        </TouchableOpacity>
    )}
    />
    </View>

  )
}

export default NavFavourites

const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 10,
    },
    iconContainer: {
        backgroundColor: "#b3b3b3",
        padding: 5,
        borderRadius: 50,
        marginRight: 15,
    },
    location: {

    },
    destination: {
        color: "#8d8d8d",
        fontSize: 16,
    },
    separator: {
        backgroundColor: "#efefef",
        height: 1,
    }

})