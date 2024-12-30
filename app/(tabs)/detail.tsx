import { View, Text, Image, StyleSheet, TextComponent } from "react-native";
import { useRoute } from "@react-navigation/native";
import Header from "@/components";
import { ScrollView } from "react-native";


export default function Detail() {
    const { params } = useRoute();
    const { title, url, date, explanation, copyright  } = params as DetailProps;
    
    return (
        <View style={styles.container}>
            <Header/>
            <View style={styles.content}>
                <Text style={styles.title}>{title}</Text>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={{uri:url}} />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>Author: {copyright?copyright.trim():'unknow'}</Text>
                    <Text style={[styles.text]}>Date: {date}</Text>
                </View>
                <ScrollView style={styles.explanationContainer}>
                    <Text style={styles.explanation}>{explanation}</Text>
                </ScrollView>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'rgba(7,26,93,255)',
        paddingHorizontal:16
    },
    content:{ 
        backgroundColor:'rgba(18,39,113,255)',
        borderRadius:20,
        padding:16,
        marginTop:20,
        marginBottom:20
    },
    imageContainer:{
        width:'100%',
        height:'50%'
    },
    image:{
        width:'100%',
        height:'100%',
        borderRadius:20,
        borderColor:'white',
        borderWidth:2
    },
    title:{
        color:'white',
        fontSize:20,
        marginVertical:12,
        fontWeight:'bold',
        textAlign:'center'
    },
    textContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
    },
    text:{
        color:'white',
        marginVertical:12,
        fontSize:12
    },
    explanation:{
        color:'white',
    },
    explanationContainer:{
        height:'25%',
    }

});

interface DetailProps {
    title: string;
    url: string;
    date: string;
    explanation: string;
    copyright: string;
}
