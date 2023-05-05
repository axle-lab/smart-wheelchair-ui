import * as React from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function StatusScreen({ navigation, route }) {
      return (
            <View style={styles.container}>
                  <Text>Check the status of the wheelchair!</Text>
                  <StatusBar style="auto" />
                  <Button onPress={() => navigation.navigate("Control")} title="Go back" />
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
		justifyContent: "center",
            position: 'absolute',
            right: 0,
            bottom: 0
	}
})