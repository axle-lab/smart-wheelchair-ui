import React from "react";
import { StyleSheet, Text, View } from "react-native";
import styles from "../styles/styles";

export default class Header extends React.Component {
      render () {
            return(
                  <View style={styles.headerContainer}>
                        <Text style={styles.headerText}>Smart Wheelchair</Text>
                  </View>
            );
      }
}