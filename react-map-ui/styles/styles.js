import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    // styles for App.js
	container: {
		flex: 1,
	},

    // styles for Box.js
    boxContainer: {
        width: '100%',
        height: '90%',
        padding: 5,
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: '#D1E2C4'
    },
    box1: {
        width: '70%',
        height: '100%',
        padding: 5,
    },
    box2: {
        flexDirection: 'column',
        width: '30%',
        height: '100%',
        padding: 5
    },
    box3: {
        flex:4,
        padding:5,
        backgroundColor: '#31352E',
        justifyContent: "center",
        alignItems: "center",
    },
    box4: {
        flex:4,
        padding:5,
        backgroundColor: '#31352E',
        flexDirection: 'column'
    },
    video: {
        flex:5,
        width: '100%',
        height: '80%'
    },
    box5: {
        flex:2,
        padding: 5,
        backgroundColor: '#D1E2C4'
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: "center",
    },
    button: {
        paddingVertical: 10,
        paddingHorizontal: 10,
        backgroundColor: '#778A35',
        justifyContent: "center",
        padding: 10,
        borderRadius: 100,
        margin: 10,
    },
    text: {
        color: '#F3EDE0',
        fontWeight: 'bold',
    },

    // styles for Header.js
    headerContainer: {
		backgroundColor: "#8FA259",
		alignItems: "center",
		justifyContent: "center",
        width: '100%',
		height: '10%',
            
	},
    headerText: {
        fontSize: 18,
        fontWeight: 'bold', 
        color: '#31352E'
    },
    
    // styles for Map.js
	mapContainer: {
        width: '100%',
        height: '100%',
        padding: 5
	},
})

export default styles;