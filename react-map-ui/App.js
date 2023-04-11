import * as React from "react"
import { Dimensions, StyleSheet, Text, View } from "react-native"
// import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete"
// import MapView, { Callout, Circle, Marker } from "react-native-maps"
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Map from './src/Map'
import Header from "./src/Header";
import Box from "./src/Box";


export default class App extends React.Component {
	render() {
		return(
			<View style={styles.container}>
				<Header />
				<Box />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	}
})