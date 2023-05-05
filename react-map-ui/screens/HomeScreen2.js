import * as React from "react";
import { View, StyleSheet, Button, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useRoute } from "@react-navigation/native";

export default function HomeScreen2({navigation}) {
      const route = useRoute();
      return (
            <View style={styles.container}>
                    <View>
                        <Text>
                            {route.params.name}
                            {() => console.log(route.params.widget)}
                        </Text>
                    </View>
                    
                    <View style={styles.button1}>
                            <Button
                                title="Speed"
                                onPress={() => navigation.navigate("Speed", { widget: "speed" })}
                            />
                    </View> 
                    <View style={styles.button2}>
                            <Button
                                title="Sound"
                                onPress={() => navigation.navigate("Sound", { widget: "sound" })}
                            />
                    </View> 
                    <View style={styles.button3}>
                            <Button 
                                title="Status"
                                onPress={() => navigation.navigate("Status", { widget: "status" })}
                            />
                    </View> 
                    <View style={styles.button3}>
                            <Button 
                                title="Settings"
                                onPress={() => navigation.navigate("Settings", { widget: "settings" })}
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