import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements/dist/icons/Icon";
import { useSelector } from "react-redux";
import tw from "tailwind-react-native-classnames";
import { selectOrigin } from "../slices/navSlice";

const data = [
    {
        id: "123",
        title: "Get A Ride",
        image: "https://links.papareact.com/3pn",
        screen: "MapScreen",
    },
    {
        id: "456",
        title: "Order Food",
        image: "https://links.papareact.com/28w",
        screen: "EatsScreen",
    },
];

const NavOptions = () => {
    const navigation = useNavigation();
    const origin = useSelector(selectOrigin)
    return (
        <View>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                horizontal
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => navigation.navigate(item.screen)}
                        disabled={!origin && item.id == '123'}
                        style={tw`p-2 pl-6 rounded-md pb-8 pt-4 bg-gray-200 m-2 w-40`}>
                        <View
                            style={tw`${!origin && item.id == '123' && "opacity-20"}`}
                        >

                            <Image
                                style={{ width: 120, height: 120, resizeMode: "contain" }}
                                source={{ uri: item.image }}
                            />
                            <Text style={tw`mt-4 text-xl font-semibold`}>{item.title}</Text>

                            <Icon
                                style={tw`p-2 bg-black rounded-full w-8 h-8 items-center justify-center  mt-4`}
                                name="arrowright" size={15} color="white" type="antdesign" />
                        </View>

                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

export default NavOptions;