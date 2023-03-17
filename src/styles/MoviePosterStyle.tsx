import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    containerImage: {
        flex: 1,
        shadowColor: "red",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.24,
        shadowRadius: 7,
        elevation: 9,
        borderRadius: 18
    },
    image: {
        flex: 1,
        borderRadius: 18
    }
});