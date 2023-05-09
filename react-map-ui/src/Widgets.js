import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import SpeedScreen from "../screens/SpeedSreen";
import SoundScreen from "../screens/SoundScreen";
import StatusScreen from "../screens/StatusScreen";
import SettingsScreen from "../screens/SettingsScreen";
import "./Global";


const Stack = createNativeStackNavigator();

export default function Widgets({route}) {
      return (
           <NavigationContainer >
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
                                    title: "Control Panel",
                                    headerStyle: {
                                          backgroundColor: '#31352E',
                                    },
                                    headerTitleStyle: {
                                          color: '#F3EDE0',
                                          fontWeight: 'bold',
                                    },
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