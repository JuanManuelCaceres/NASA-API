import { View , Text , StyleSheet, TouchableOpacity} from "react-native"
import { PostImage as PostImageType } from "@/types";
import { FC } from "react";

const PostImageCard:FC<PostImageType>=({title,date,copyright})=>{
    return(
        <View style={styles.container}>
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
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'rgba(18,39,113,255)',
        marginVertical:6,
        borderRadius:20,
        padding:16,
    },
    title:{
        color:'white',
        fontSize:18,
        marginVertical:12,
        fontWeight:'bold',
    },
    copyContainer:{
        width:'100%'
    },
    copyText:{
        width:'100%',
        color:'white',
    }, buttonContainer:{
        alignItems:"flex-end",
    },
    buttonText:{
        color:'white'
    }
})
export default PostImageCard;