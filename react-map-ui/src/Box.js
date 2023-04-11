import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Map from "./Map";
import Widgets from "./Widgets";

export default class Box extends React.Component {
      render() {
            return(
                  <View style={styles.container}>
                        <View style={styles.box1}>
                              <Map />
                              
                        </View>

                        <View style={styles.box2}>
                              <View style={styles.box3}>
                                    <View style={styles.inner}>
                                          <Text>Search box</Text>
                                    </View>
                              </View>

                              <View style={styles.box4}>
                                    <View style={styles.inner}>
                                          <Text>Zoom-in Map</Text>
                                    </View>
                              </View>
                              
                              
                              <View style={styles.box5}>
                                    <Widgets />
                              </View>
                              
                        </View>

                  </View>
            );
      }
}

const styles = StyleSheet.create({
      container: {
            width: '100%',
		height: '85%',
		padding: 5,
		flexDirection: 'row',
		flexWrap: 'wrap'
	},
	box1: {
		width: '70%',
            height: '100%',
            padding: 5,
            backgroundColor: 'transparent'
	},
      box2: {
            flexDirection: 'column',
		width: '30%',
            height: '100%',
            padding: 5
	},
      box3: {
            // flex:1,
		width: '100%',
            height: '20%',
            padding: 5
	},
      box4: {
            flex:2,
		// width: '100%',
            // height: '60%',
            padding: 5
	},
      box5: {
            flex:2, 
		// width: '100%',
            // height: '20%',
            padding: 5
	},
      inner: {
            flex: 1,
            backgroundColor: "#eee",
            alignItems: 'center',
            justifyContent: 'center'
      }
})