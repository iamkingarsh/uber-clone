import { View, Text } from 'react-native'
import React from 'react'
import MapView from 'react-native-maps'
import { useSelector } from 'react-redux'
import { selectOrigin } from '../slices/navSlice'

const Map = () => {
    const origin = useSelector(selectOrigin)
  return (
    <MapView
        style={{ flex: 1 }}
        initialRegion={{
            latitude: origin.location.lat,
            longitude: origin.location.lng,
            latitudeDelta: 0.0922, // zoom
            longitudeDelta: 0.0421,
        }}
        mapType='mutedStandard'
        showsUserLocation={true}
        showsMyLocationButton={true}
     
    />
  )
}

export default Map