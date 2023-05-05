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
import SettingsScreen from "../screens/SettingsScreen";
import HomeScreen2 from "../screens/HomeScreen2";
import "./Global";


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
// const AuthStack = createStackNavigator();

export default function Widgets({route}) {
      return (
           <NavigationContainer style={styles.container}>
            <View>
                  <Text>{global.myGlobalVariable}</Text>
            </View>
                  <Stack.Navigator screenOptions={{
                        headerShown: true,
                        headerBackButtonMenuEnabled: false,
                        headerBackVisible: false,
                        presentation: 'transparentModal'
                  }}>   
                        <Stack.Screen
                              name="Control"
                              component={HomeScreen}
                              options={{
                                    title: "Control Panel"
                              }}
                        />
                        <Stack.Screen
                              name="Home"
                              component={HomeScreen2}
                              options={{
                                    title: "Home",
                                    // headerShown: false
                              }}
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
                        <Stack.Screen
                              name="Settings"
                              component={SettingsScreen}
                              options={{
                                    title: "Settings", 
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