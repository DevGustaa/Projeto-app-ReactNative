import { View, Text, StyleSheet, FlatList, Image} from "react-native"
import { STATUSIMAGES } from "../utils/statusImage/statusImage";
import { STATUSCOD } from "../components/Status";
import { FILEIRACOD } from "../components/Fileira";
import { FILEIRAIMAGES } from "../utils/Fileira Final/FileiraImagens/Fileira"
import { Fonts } from "../components/Fonts";
import { Roboto_100Thin, Roboto_400Regular } from "@expo-google-fonts/roboto";

export const Home = () => {

    Fonts();

    return (

    <View style={styles.body}>
        <View style={styles.bodyHeader}>
            <View style={styles.bodyHeaderTitulo}>
                <Text style={styles.bodyHeaderTituloEscrita}>NOSSOS PARCEIROS</Text>
                <View style={styles.bodyHeaderTituloBarra}/>
            </View>

                <FlatList
                    data={STATUSIMAGES}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => <STATUSCOD StatusURL={item.StatusimagemURL}/>}
                    horizontal
                    contentContainerStyle={styles.ContentListStatus}
                    showsHorizontalScrollIndicator ={false}
                />

                <View style={styles.bodyHeaderTituloBarraFinal}/>
        </View>

        <View style={styles.bodyCarrosel}>
            <Text style={styles.bodyHeaderTituloEscrita}>ANÚNCIO</Text>
            <View style={styles.BodyCarroselContainer}/>
            <View style={styles.bodycCarroselBarra}/>
        </View>
        <View style={styles.bodyMain}>
            <Text style={styles.bodyMainText}>BARES E VIDA NOTURNA</Text>

            <FlatList
                data={FILEIRAIMAGES}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <FILEIRACOD FILEIRAURL={item.FilaURL}/>}
                horizontal
                contentContainerStyle={styles.ContentListFILA}
                showsHorizontalScrollIndicator ={false}
            />

        </View>
        <View style={styles.bodyFooter}>
            <Text style={styles.footerTexto}>ESTOU NO RESTAURANTE</Text>
            
            <View style={styles.bodyFooterBarra}/>

            <View style={styles.quadradoQR}>
                <Image style={styles.quadradoQrImagem} source={require("./imagensGerais/QR.png")}/>
                <View style={styles.quadradoQRTexto}>
                    <Text>LER QRCODE</Text>
                </View>
                
            </View>
        </View>
    </View>
)};

const styles = StyleSheet.create({
    body:{
        flex: 1,
        alignItems: "center",
        flexDirection:"column",
        width: "100%",
        height: "100%", 
        padding: 12,
    },

    bodyHeader:{
        marginTop: 42,
        width: "100%",
    },

    bodyHeaderTitulo:{
        height: "auto",
        flexDirection: "row",

    },

    bodyHeaderTituloEscrita:{
        marginRight:20,
        fontFamily: "Roboto_100Thin",

    },

    bodyHeaderTituloBarra:{
        width: "57%",
        height: 1,
        marginTop:10,
        backgroundColor: "#9D9D9D"
    },

    bodyHeaderTituloBarraFinal:{
        width: "100%",
        marginBottom: 9,
        height: 1,
        marginTop:21,
        backgroundColor: "#9D9D9D"
    },

    ContentListStatus:{
        paddingLeft: 5,
        paddingRight: 15,
        paddingTop: 10,
    },

    bodyCarrosel:{
        width: "100%"

        },

    BodyCarroselContainer:{
        width:366,
        height:162,
        marginTop:9,
        backgroundColor:"red"
    },

    bodycCarroselBarra:{
        width: "100%",
        marginBottom: 16,
        height: 1,
        marginTop:8,
        backgroundColor: "#9D9D9D"
    },

    bodyMain:{
        width:"100%",
        justifyContent:"center",
        alignItems: "flex-start",
    },

    bodyMainText:{
        fontFamily: "Roboto_100Thin"
    },

    ContentListFILA:{
        marginHorizontal:5
    },

    
    bodyFooter:{

        width: "100%",
        justifyContent: "center",
        alignItems: "center",
    },

    bodyFooterBarra:{
        width: 342,
        marginBottom: 9,
        height: 1,
        marginTop:10,
        backgroundColor: "#9D9D9D"
    },

    footerTexto:{
        fontFamily: "Roboto_400Regular",
        fontSize: 24,
        paddingTop: 28
    },
    
    quadradoQR:{
        width:150,
        height:68,
        marginTop: 17,
        borderColor: "#929292",
        borderRadius: 10,
        borderWidth: 1,
        justifyContent:"center",
        alignContent: "center",
        flexDirection:"row",
        alignItems:"center"

    },

    quadradoQrImagem:{
        width:73,
        height:58,

    },

    quadradoQRTexto:{
        width:65,
        height: 38,
    }
})

