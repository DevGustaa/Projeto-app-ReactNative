import { TouchableOpacity, StyleSheet, Image } from "react-native";

export const STATUSCOD = (props) => {
    return (


            <TouchableOpacity>
                    <Image style={styles.Status} source={props.StatusURL}/>
            </TouchableOpacity>

    );

}

const styles = StyleSheet.create({
    Status: {
        width: 75,
        height: 75,
        borderRadius: 50,
        marginHorizontal: 7,
        borderWidth: 2, 
        borderColor: '#6E2929', 
    },
    
    





})
