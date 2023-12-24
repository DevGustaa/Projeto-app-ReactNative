import { useFonts, Roboto_100Thin, Roboto_400Regular } from "@expo-google-fonts/roboto";

export function Fonts() { 
    const [FontLoaded] = useFonts({
        Roboto_100Thin,
        Roboto_400Regular
    })

    if (!FontLoaded){
        return null;
    }


};