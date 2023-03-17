import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    containerActor:{
        flexDirection: 'row',
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.24,
        shadowRadius: 7,
        elevation: 9,
        borderRadius: 10,
        marginLeft: 20,
        paddingRight: 15,
        height: 50
    },
    actorImage:{
        width: 50,
        height: 50,
        borderRadius: 10
    },
    actorDescription:{
        marginLeft: 10,
        paddingTop: 4
    },
    actorName:{
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black'
    },
    actorCharacter:{
        fontSize: 16,
        opacity: 0.7 
    }
});