import * as React from "react";
import { useState, useEffect } from 'react';
import { View, StyleSheet, Text } from "react-native";
import { Button } from 'react-native-elements';
import { StatusBar } from "expo-status-bar";
import { useRoute } from "@react-navigation/native";
import "../src/Global";
import FeatherIcon from 'react-native-vector-icons/Feather';
import styles from "../styles/screenStyles";


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
            <View style={styles.homeContainer}>
                  {
                        mySpeed &&
                        <View style={styles.button}>
                              <Button
                                    title={<FeatherIcon color="#fff" name="sliders" size={20} />}
                                    buttonStyle={styles.button}
                                    titleStyle={styles.text}
                                    onPress={() => {console.log("speed status: " + mySpeed + global.speedShown + global.soundShown + global.statusShown); navigation.navigate("Speed", { widget: "speed" })}}
                              >
                                    
                              </Button>
                        </View> 
                  }
                 {
                        mySound &&
                        <View style={styles.button}>
                              <Button
                                    title={<FeatherIcon color="#fff" name="volume-1" size={20} />}
                                    buttonStyle={styles.button}
                                    titleStyle={styles.text}
                                    onPress={() => navigation.navigate("Sound", { widget: "sound" })}
                              />
                        </View> 
                  }
                  {
                        myStatus &&
                        <View style={styles.button}>
                              <Button 
                                    title={<FeatherIcon color="#fff" name="battery" size={20} />}
                                    buttonStyle={styles.button}
                                    titleStyle={styles.text}
                                    onPress={() => navigation.navigate("Status", { widget: "status" })}
                              />
                        </View> 
                  }
                  
                  <View style={styles.button}>
                        <Button 
                              title={<FeatherIcon color="#fff" name="settings" size={20} />}
                              buttonStyle={styles.button}
                              titleStyle={styles.text}
                              onPress={() => navigation.navigate("Settings", { setSpeed: setMySpeed, setSound: setMySound, setStatus: setMyStatus})}
                        />
                  </View> 
                  <StatusBar style="auto" />
            </View>
      );
}