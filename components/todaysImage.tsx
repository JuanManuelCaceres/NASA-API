import { View , Text , StyleSheet , Image, Button, Pressable, TouchableHighlight, TouchableOpacity} from "react-native"
import { PostImage } from "@/types";
import { FC } from "react";

const TodaysImage:FC<PostImage> =({copyright,title,url,date})=>{
    return(
        <View style={styles.container}>
            <View>
                <Image source={{uri:url}} style={styles.todaysImage} />
            </View>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.copyContainer}>
                <Text style={styles.copyText}>Author: {copyright}</Text>
                <Text style={styles.copyText}>Date: {date}</Text>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity>
                    <Text style={styles.buttonText}>View More</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export const styles = StyleSheet.create({
    container:{
        backgroundColor:'#2c449d',
        marginVertical:16,
        borderRadius:32,
        padding:16,
        marginHorizontal:0
    },
    todaysImage:{
        height:180,
        width:'100%',
        borderRadius:20,
        borderColor:'white',
        borderWidth:2
    },
    title:{
        color:'white',
        fontSize:20,
        marginVertical:12,
        fontWeight:'bold',
    },
    copyContainer:{
        width:'100%'
    },
    copyText:{
        width:'100%',
        color:'white',
    },
    buttonContainer:{
        alignItems:"flex-end",
    },
    buttonText:{
        color:'white'
    }

})

export default TodaysImage;