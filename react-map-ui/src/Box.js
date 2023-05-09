import React, { useRef, useState } from "react";
import { StyleSheet, Text, View} from "react-native";
import { Button } from 'react-native-elements';
import { Video } from "expo-av";
import Map from "./Map";
import Widgets from "./Widgets";
import styles from "../styles/styles"

export default function Box () {
      const video = useRef(null);
      const [status, setStatus] = useState({});
      return(
            <View style={styles.boxContainer}>
                  <View style={styles.box1}>
                        <Map />
                        
                  </View>

                  <View style={styles.box2}>
                        <View style={styles.box3}>
                              <Text style={styles.text}> Diagnostic Statistics </Text>
                              
                        </View>

                        <View style={styles.box4}>
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
                                    <Button  
                                          buttonStyle={styles.button}
                                          titleStyle={styles.text}
                                          title="Play from 5s" onPress={() => video.current.playFromPositionAsync(5000)} 
                                    />
                                          <Button 
                                          buttonStyle={styles.button}
                                          titleStyle={styles.text}
                                          title={status.isLooping ? "Set to not loop" : "Set to loop"} onPress={() => video.current.setIsLoopingAsync(!status.isLooping)} 
                                    />
                              </View>
                        </View>
                        
                        
                        <View style={styles.box5}>
                              <Widgets />
                        </View>
                        
                  </View>

            </View>
      );
}