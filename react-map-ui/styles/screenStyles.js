import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    homeContainer: {
        flex: 1,
		backgroundColor: "#31352E",
		alignItems: "center",
		justifyContent: "center",
        height: '100%',
        flexDirection: 'row',
	},
    button: {
        paddingVertical: 5,
        paddingHorizontal: 5,
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

    // styles for SettingsScreen.js
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

    // container shared by "widget"Screen.js
    widgetContainer: {
        flex:1,
        width: '30%',
        height: '90%',
        backgroundColor: "#eee",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "center",
        position: 'absolute',
        right: 0,
        bottom: 0
    },
})

export default styles;