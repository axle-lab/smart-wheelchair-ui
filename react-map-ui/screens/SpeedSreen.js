import * as React from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import { StatusBar } from "expo-status-bar";
import styles from "../styles/screenStyles";

export default function SpeedScreen({ navigation, route }) {
      return (
            <View style={styles.widgetContainer}>
                  <Text>Adjust the speed of the wheelchair!</Text>
                  <StatusBar style="auto" />
                  <Button onPress={() => navigation.navigate("Control")} title="Go back" />
            </View>
      );
}