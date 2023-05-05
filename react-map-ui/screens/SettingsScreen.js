import React, { useState } from 'react';
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  Switch,
  Button
} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import "../src/Global";

const SECTIONS = [
  {
    header: 'Preferences',
    items: [
      { id: 'language', icon: 'globe', label: 'Language', type: 'select' },
      { id: 'darkMode', icon: 'moon', label: 'Dark Mode', type: 'toggle' },
      { id: 'wifi', icon: 'wifi', label: 'Use Wi-Fi', type: 'toggle' },
    ],
  },
  {
      header: 'Widgets',
      items: [
        { id: 'speed', icon: 'sliders', label: 'Speed', type: 'toggle' },
        { id: 'sound', icon: 'volume-1', label: 'Sound', type: 'toggle' },
        { id: 'status', icon: 'battery', label: 'Status', type: 'toggle' },
      ],
    },
  {
    header: 'Help',
    items: [
      { id: 'bug', icon: 'flag', label: 'Report Bug', type: 'link' },
      { id: 'contact', icon: 'mail', label: 'Contact Us', type: 'link' },
    ],
  },
  {
    header: 'Content',
    items: [
      { id: 'save', icon: 'save', label: 'Saved', type: 'link' },
      { id: 'download', icon: 'download', label: 'Downloads', type: 'link' },
    ],
  },
];

export default function SettingsScreen({ navigation, route })  {
  const [form, setForm] = useState({
    language: 'English',
    darkMode: true,
    wifi: false,
    speed: global.speedShown,
    sound: global.soundShown,
    status: global.statusShown,
  });

  const [widget, setWidget] = useState({
    speed: global.speedShown,
    sound: global.soundShown,
    status: global.statusShown,
  });

  const {setSpeed, setSound, setStatus} = route.params;


  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.subcontainer} scrollEnabled={true}>
        <View style={styles.header}>
            <StatusBar style="auto" />
            {/* <Button onPress={() => {
              navigation.navigate("Home", { widget: widget, name: "yuqi"}); 
              console.log(widget)}} 
              title="Go back" /> */}
            <Button onPress={() => navigation.navigate("Control")} title="Go back" />
          <Text style={styles.title}>Settings</Text>
        </View>

        <View style={styles.profile}>
          <Image
            alt=""
            source={{
              uri: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80',
            }}
            style={styles.profileAvatar}
          />

          <Text style={styles.profileName}>John Doe</Text>

          <Text style={styles.profileEmail}>john.doe@mail.com</Text>

          <TouchableOpacity
            onPress={() => {
              // handle onPress
            }}>
            <View style={styles.profileAction}>
              <Text style={styles.profileActionText}>Edit Profile</Text>

              <FeatherIcon color="#fff" name="edit" size={16} />
            </View>
          </TouchableOpacity>
        </View>

        {SECTIONS.map(({ header, items }) => (
          <View style={styles.section} key={header}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionHeaderText}>{header}</Text>
            </View>
            <View style={styles.sectionBody}>
              {items.map(({ id, label, icon, type, value }, index) => {
                return (
                  <View
                    key={id}
                    style={[
                      styles.rowWrapper,
                      index === 0 && { borderTopWidth: 0 },
                    ]}>
                    <TouchableOpacity
                      onPress={() => {
                        // handle onPress
                      }}>
                      <View style={styles.row}>
                        <FeatherIcon
                          color="#616161"
                          name={icon}
                          style={styles.rowIcon}
                          size={22}
                        />

                        <Text style={styles.rowLabel}>{label}</Text>

                        <View style={styles.rowSpacer} />

                        {type === 'select' && (
                          <Text style={styles.rowValue}>{form[id]}</Text>
                        )}

                        {type === 'toggle' && (
                          <Switch
                              value={form[id]}
                              onValueChange={
                                value => {
                                  if (id == "sound") {
                                    console.log(id + " value changed to " + value)
                                    global.soundShown = value;
                                    setSound(value);
                                  }
                                  else if (id == "speed") {
                                    console.log(id + " value changed to " + value)
                                    global.speedShown = value;
                                    setSpeed(value);
                                  }
                                  else if (id == "status") {
                                    console.log(id + " value changed to " + value)
                                    global.statusShown = value;
                                    setStatus(value);
                                  }
                                  setForm({...form, [id]: value});
                                  setWidget({...widget, [id]: value});
                                  // console.log(id + " value changed to " + value)
                                }
                              }
                          />
                        )}

                        {(type === 'select' || type === 'link') && (
                          <FeatherIcon
                            color="#ababab"
                            name="chevron-right"
                            size={22}
                          />
                        )}
                      </View>
                    </TouchableOpacity>
                  </View>
                );
              })}
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    width: '30%',
    height: '85%',
		backgroundColor: "#eee",
		alignItems: "center",
    flexDirection: "row",
		justifyContent: "center",
    position: 'absolute',
    right: 0,
    bottom: 0
  },
  subcontainer: {
    paddingVertical: 24,
  },
  section: {
    paddingTop: 12,
  },
  sectionHeader: {
    paddingHorizontal: 24,
    paddingVertical: 8,
  },
  sectionHeaderText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#a7a7a7',
    textTransform: 'uppercase',
    letterSpacing: 1.2,
  },
  sectionBody: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#e3e3e3',
  },
  header: {
    paddingLeft: 24,
    paddingRight: 24,
    marginBottom: 12,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#1d1d1d',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 15,
    fontWeight: '500',
    color: '#929292',
  },
  profile: {
    padding: 16,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#e3e3e3',
  },
  profileAvatar: {
    width: 60,
    height: 60,
    borderRadius: 9999,
  },
  profileName: {
    marginTop: 12,
    fontSize: 20,
    fontWeight: '600',
    color: '#090909',
  },
  profileEmail: {
    marginTop: 6,
    fontSize: 16,
    fontWeight: '400',
    color: '#848484',
  },
  profileAction: {
    marginTop: 12,
    paddingVertical: 10,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#007bff',
    borderRadius: 12,
  },
  profileActionText: {
    marginRight: 8,
    fontSize: 15,
    fontWeight: '600',
    color: '#fff',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingRight: 24,
    height: 50,
  },
  rowWrapper: {
    paddingLeft: 24,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#e3e3e3',
  },
  rowIcon: {
    marginRight: 12,
  },
  rowLabel: {
    fontSize: 17,
    fontWeight: '500',
    color: '#000',
  },
  rowValue: {
    fontSize: 17,
    color: '#616161',
    marginRight: 4,
  },
  rowSpacer: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
});