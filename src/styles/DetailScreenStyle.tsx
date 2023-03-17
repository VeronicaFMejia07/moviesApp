import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    containerPost: {
        width: '100%',
        shadowColor: "red",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.24,
        shadowRadius: 7,
        elevation: 9,
        borderBottomStartRadius: 25,
        borderBottomEndRadius:25,
    },
    imageBorder:{
        flex: 1,
        overflow: 'hidden',
        borderBottomStartRadius: 25,
        borderBottomEndRadius:25, 
    },
    post: {
        flex: 1
    },
    containerTitle:{
        marginHorizontal: 20,
        marginTop: 20
    },
    subtitle:{
        fontSize: 16,
        opacity: 0.8
    },
    title:{
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black'
    },
    backButton:{
        position: 'absolute',
        zIndex: 999,
        elevation: 9,
        top: 25,
        left: 10
    }
});