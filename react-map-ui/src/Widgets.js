import * as React from "react";
import { View, StyleSheet, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator} from "@react-navigation/stack";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import SpeedScreen from "../screens/SpeedSreen";
import SoundScreen from "../screens/SoundScreen";
import StatusScreen from "../screens/StatusScreen";


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
// const AuthStack = createStackNavigator();

export default function Widgets() {
      return (
           <NavigationContainer style={styles.container}>
                  <Stack.Navigator screenOptions={{
                        headerShown: true,
                        headerBackButtonMenuEnabled: false,
                        headerBackVisible: false,
                        presentation: 'transparentModal'
                  }}>   
                        <Stack.Screen
                              name="Control"
                              component={HomeScreen}
                              options={{title: "Control Panel"}}
                        />
                        <Stack.Screen
                              name="Speed"
                              component={SpeedScreen}
                              options={{
                                    title: "Speed Control", 
                                    headerShown: false
                              }}
                        />
                        <Stack.Screen
                              name="Sound"
                              component={SoundScreen}
                              options={{
                                    title: "Sound Control", 
                                    headerShown: false
                              }}
                        />
                        <Stack.Screen
                              name="Status"
                              component={StatusScreen}
                              options={{
                                    title: "Status Control", 
                                    headerShown: false
                              }}
                        />

                  </Stack.Navigator>
           </NavigationContainer>
      )
            

}

const styles = StyleSheet.create({
	container: {
		flex: 5,
            height:'100%'
	}
})