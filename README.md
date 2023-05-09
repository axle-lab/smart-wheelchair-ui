# smart-wheelchair-ui
This project creates the navigtaion UI for smart wheelchair users. It has 4 major components: 
1. Big map 
2. Diagnostic statistics display
3. Zoom-in map
4. Control panel

The overall layout of these 4 components are implemented in src/Box.js.
- box1: big map
- box2: the entire right column
  - box3: diagnostic statistics display
  - box4: zoom-in map
  - box5: control panel

## Big map (src/Map.js)
The map is an instance of Google Map, and it supports searching functionality (search results displayed in nearest-distance order).

## Diagnostic statistics display (not implemented yet)


## Zoom-in map (src/Box.js)
Currently a default video (for now it's a placeholder) is imported to represeant a closer view of the map during navigation. During the user tests, a default video of the path view will be pre-recorded and played. 
* Note: only ".mp4" file is supported.

## Control panel (src/Widgets.js)
StackNavigation is used to support screen switching. 
Users can customize which widgets to display on the home screen by toggling the corresponding buttons in the setting screen (screens/SettingsScreen.js).
Currently only 3 widgets are implemented. To add more, just mimic the code for one of the widget. (1. add a button in SettingsScreen.js; 2. add a new screen file xxx.js; 3. add a screen to the navigation stack in Widgets.js)

For the widget screen, no real functionality has been implemented yet. To add code, go to the corresponding screen file.
