import * as React from "react"
import { Dimensions, StyleSheet, Text, View } from "react-native"
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete"
import MapView, { Callout, Circle, Marker } from "react-native-maps"

export default function Map() {
      
      const [ pin, setPin ] = React.useState({
            latitude: 37.78825,
            longitude: -122.4324
      })
      const [ region, setRegion ] = React.useState({
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
      })

      return (
            <View style={{flex: 1 }}>
                  <GooglePlacesAutocomplete
                        placeholder="Search"
                        fetchDetails={true}
                        GooglePlacesSearchQuery={{
                              rankby: "distance"
                        }}
                        onPress={(data, details = null) => {
                              // 'details' is provided when fetchDetails = true
                              console.log(data, details)
                              setRegion({
                                    latitude: details.geometry.location.lat,
                                    longitude: details.geometry.location.lng,
                                    latitudeDelta: 0.0922,
                                    longitudeDelta: 0.0421
                              })
                        }}
                        query={{
                              key: "AIzaSyAZYKnpA40TfTUxuDiIJr2FmX4hMR79GTY",
                              language: "en",
                              components: "country:us",
                              types: "establishment",
                              radius: 30000,
                              location: `${region.latitude}, ${region.longitude}`
                        }}
                        styles={{
                              container: { flex: 0, position: "absolute", width: "100%", zIndex: 1 },
                              listView: { backgroundColor: "black" }
                        }}
                  />
                  <MapView
                        style={styles.map}
                        initialRegion={{
                              latitude: 37.78825,
                              longitude: -122.4324,
                              latitudeDelta: 0.0922,
                              longitudeDelta: 0.0421
                        }}
                        provider="google"
                  >
                        <Marker coordinate={{ latitude: region.latitude, longitude: region.longitude }} />
                        <Marker
                              coordinate={pin}
                              pinColor="black"
                              draggable={true}
                              onDragStart={(e) => {
                                    console.log("Drag start", e.nativeEvent.coordinates)
                              }}
                              onDragEnd={(e) => {
                                    setPin({
                                          latitude: e.nativeEvent.coordinate.latitude,
                                          longitude: e.nativeEvent.coordinate.longitude
                                    })
                              }}
                        >
                              <Callout>
                                    <Text>I'm here</Text>
                              </Callout>
                        </Marker>
                        <Circle center={pin} radius={1000} />
                  </MapView>
            </View>
      )
      
	
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
            width: '100%',
		height: '85%',
		padding: 5,
		flexDirection: 'row',
		flexWrap: 'wrap'
	},
	map: {
            width: '100%',
            height: '100%',
            padding: 5
	}
})