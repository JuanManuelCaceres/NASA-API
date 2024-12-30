import Header from "@/components";
import { Text, View , StyleSheet} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import fetch from "@/utils/fetch";
import { useEffect, useState } from "react";
import TodaysImage from "@/components/todaysImage";
import { PostImage } from "@/types";
import {format,sub} from 'date-fns';
import LastFiveDaysImages from "@/components/lastFiveDaysImages";

export default function Home() {
  const [todaysImage,setTodaysImage] = useState<PostImage>({});
  const [lastFiveDaysImages,setLastDaysImages] = useState<PostImage[]>([])

  useEffect(()=>{
    const loadTodaysImage = async ()=>{
      try {
        const todaysImageResponse = await fetch();
       
        setTodaysImage(todaysImageResponse);
      } catch (error) {
        console.error(error);
        setTodaysImage({});
      }
    };

    const loadLastDaysImages = async ()=>{
      try {
        const date = new Date();
        const todayDate = format(date,'yyyy-MM-dd');
        const fiveDaysAgo = format(sub(date,{days:5}),'yyyy-MM-dd');
        const lastFiveDaysImagesResponse = await fetch(`&start_date=${fiveDaysAgo}&end_date=${todayDate}`);
        setLastDaysImages(lastFiveDaysImagesResponse);
      } catch (error) {
        console.error(error)
      }
    };

    loadTodaysImage().catch(null);
    loadLastDaysImages().catch(null);
  },[]);
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Header/>
        <TodaysImage {...todaysImage}/>
        <LastFiveDaysImages postImages={lastFiveDaysImages}/>
      </View>
    </SafeAreaView>
    
  );
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'rgba(7,26,93,255)',
    paddingHorizontal:16
  }
});