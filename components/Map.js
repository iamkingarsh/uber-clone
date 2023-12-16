import { View, Text } from 'react-native'
import React from 'react'
import MapView, { Marker } from 'react-native-maps'
import { useDispatch, useSelector } from 'react-redux'
import { selectDestination, selectOrigin } from '../slices/navSlice'
import { GOOGLE_MAPS_API_KEY } from "@env";
import MapViewDirections from 'react-native-maps-directions'
import { useEffect } from 'react'
import { setTravelTimeInfo } from '../slices/navSlice'
import tw from 'tailwind-react-native-classnames'

const Map = () => {
  const dispatch = useDispatch()
  const origin = useSelector(selectOrigin)
  const destination = useSelector(selectDestination)
  const mapRef = React < MapView > (null)



  return (
    <MapView
      initialRegion={{
        latitude: origin?.location?.lat,
        longitude: origin?.location?.lng,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}
      mapType="mutedStandard"
      style={tw`flex-1`}
    >
      {
        origin?.location && 
          <Marker
            coordinate={{
              latitude: origin.location.lat,
              longitude: origin.location.lng,
            }}
            title="Origin"
            description={origin.description}
            identifier="origin"
            
          />
      }
    </MapView>
  )
}

export default Map