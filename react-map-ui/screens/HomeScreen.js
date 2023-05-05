import * as React from "react";
import { useState, useEffect } from 'react';
import { View, StyleSheet, Button, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useRoute } from "@react-navigation/native";
import "../src/Global";

export default function HomeScreen({navigation}) {
      const route = useRoute({
            name: "",
            widget: {}
      });
      const [mySpeed, setMySpeed] = useState(global.speedShown);
      const [mySound, setMySound] = useState(global.soundShown);
      const [myStatus, setMyStatus] = useState(global.statusShown);

      useEffect(() => {
            setMySpeed(global.speedShown);
      }, [global.speedShown]);

      return (
            <View style={styles.container}>
                  {
                        mySpeed &&
                        <View style={styles.button1}>
                              <Button
                                    title="Speed"
                                    onPress={() => {console.log("speed status: " + mySpeed + global.speedShown + global.soundShown + global.statusShown); navigation.navigate("Speed", { widget: "speed" })}}
                              />
                        </View> 
                  }
                 {
                        mySound &&
                        <View style={styles.button2}>
                              <Button
                                    title="Sound"
                                    onPress={() => navigation.navigate("Sound", { widget: "sound" })}
                              />
                        </View> 
                  }
                  {
                        myStatus &&
                        <View style={styles.button3}>
                              <Button 
                                    title="Status"
                                    onPress={() => navigation.navigate("Status", { widget: "status" })}
                              />
                        </View> 
                  }
                  
                  <View style={styles.button3}>
                        <Button 
                              title="Settings"
                              onPress={() => navigation.navigate("Settings", { setSpeed: setMySpeed, setSound: setMySound, setStatus: setMyStatus})}
                        />
                  </View> 
                  <StatusBar style="auto" />
            </View>
      );
}


const styles = StyleSheet.create({
      container: {
            flex: 1,
		backgroundColor: "#eee",
		alignItems: "center",
		justifyContent: "center",
            height: '100%',
            flexDirection: 'row',
	},
      button1: {
            flex: 1,
            padding: 5,
            borderRadius: 8,
            paddingVertical: 1,
            paddingHorizontal: 5,
            backgroundColor: '#f01d71'
      },
      button2: {
            flex: 1,
            padding: 5,
            borderRadius: 8,
            paddingVertical: 1,
            paddingHorizontal: 5,
            backgroundColor: '#f01d71'
      },
      button3: {
            flex: 1,
            padding: 5,
            borderRadius: 8,
            paddingVertical: 1,
            paddingHorizontal: 0,
            backgroundColor: '#f01d71'
      }
})