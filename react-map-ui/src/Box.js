import React, { useRef, useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { Video } from "expo-av";
// import { Video } from "react-native-video";

import Map from "./Map";
import Widgets from "./Widgets";

export default function Box () {
      // render() {
            const video = useRef(null);
            const [status, setStatus] = useState({});
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
                                          <Video
                                                ref={video}
                                                style={styles.video}
                                                source ={{uri: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"}}
                                                useNativeControls
                                                resizeMode="contain"
                                                isLooping
                                                onPlaybackStatusUpdate={setStatus}
                                          />
                                          <View style={styles.buttons}>
                                                <Button title="Play from 5s" onPress={() => video.current.playFromPositionAsync(5000)} />
                                                <Button title={status.isLooping ? "Set to not loop" : "Set to loop"} onPress={() => video.current.setIsLoopingAsync(!status.isLooping)} />
                                          </View>
                                    </View>
                                    
                              </View>
                              
                              
                              <View style={styles.box5}>
                                    <Widgets />
                              </View>
                              
                        </View>

                  </View>
            );
      }
// }

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
            flex:1,
            padding: 5
	},
      box4: {
            flex:3,
            padding: 5,
            backgroundColor: 'transparent'
	},
      video: {
            flex:1,
            // alignSelf: 'stretch',
            width: '80%',
            height: '80%'
      },
      box5: {
            flex:2,
            padding: 5
	},
      inner: {
            flex: 1,
            backgroundColor: "#eee",
            alignItems: 'center',
            justifyContent: 'center'
      }
})