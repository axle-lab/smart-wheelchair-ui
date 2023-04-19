import * as React from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function SoundScreen({ navigation, route }) {
      return (
            <View style={styles.container}>
                  <Text>Adjust the sound of the ipad!</Text>
                  <StatusBar style="auto" />
                  <Button onPress={() => navigation.goBack()} title="Go back" />
            </View>
      );
}

const styles = StyleSheet.create({
      container: {
            flex:1,
            width: '30%',
            height: '85%',
		backgroundColor: "#eee",
		alignItems: "center",
            flexDirection: "row",
            flexWrap: 'wrap',
		justifyContent: "center",
            position: 'absolute',
            right: 0,
            bottom: 0
	},
      video: {
            alignSelf: 'stretch',
            width: '80%',
            height: '80%'
      }
})