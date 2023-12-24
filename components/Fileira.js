import { TouchableOpacity, Image, StyleSheet } from "react-native";

export const FILEIRACOD = (props) => {
    return (

        <TouchableOpacity>
            <Image style={styles.Fila} source={props.FILEIRAURL}/>
        </TouchableOpacity>

    );
}

const styles = StyleSheet.create({
    Fila:{
        width:112,
        height:201,
        borderRadius:14,
        marginRight: 7
    }
    
})