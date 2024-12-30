import { useFonts } from "expo-font";
import { View , Text , Image , StyleSheet} from "react-native";

export default function Header(){
    
    const [loaded] = useFonts({
        SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
      });

    return(
        <View style={styles.container}>
            <View style={styles.leftContainer}><Text style={styles.text}>Explore</Text></View>
            <View style={styles.rightContainer}><Image style={styles.logo} source={require('../assets/images/nasa-logo.png')} /></View>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        alignItems:"center",
        backgroundColor:'rgba(7,26,93,255)',
        width:"100%",
        height: 70,
    },
    leftContainer:{
        flex:1,
        alignItems:"flex-start"
    },
    text:{
        color:"white",
        fontSize:22,
    },
    rightContainer:{
        flex:1,
        alignItems:"flex-end"
    },
    logo:{
        width:50,
        height:50,
        aspectRatio:"auto"
    },
});