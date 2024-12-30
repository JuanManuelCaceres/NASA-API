import { PostImage } from "@/types";
import { FC } from "react";
import { View , StyleSheet , Text , ScrollView} from "react-native";
import PostImageCard from "./postImage";


 const LastFiveDaysImages:FC<{postImages? : PostImage[]}>=({postImages})=>{
    return(
       <View style={styles.container}>
        <Text style={styles.title}>Last 5 Days</Text>
        <ScrollView style={styles.scrollContainer}>
            {postImages?.map(postImage=>(
                <PostImageCard key={`post-image-${postImage.title}`} {...postImage} />
            ))}
        </ScrollView>
       </View>
    );
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        marginVertical:8,
    },
    title:{
        color:"white",
        fontSize:16,
        marginBottom:18
    },
    scrollContainer:{
        paddingHorizontal:0,
    }
})
export default LastFiveDaysImages;