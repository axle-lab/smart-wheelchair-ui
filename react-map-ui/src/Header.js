import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default class Header extends React.Component {
      render () {
            return(
                  <View style={styles.container}>
                        <Text>Header Component</Text>
                  </View>
            );
      }
}

const styles = StyleSheet.create({
      container: {
		backgroundColor: "#eee",
		alignItems: "center",
		justifyContent: "center",
            width: '100%',
		height: '15%'
	}
})