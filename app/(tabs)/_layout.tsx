import { Stack } from "expo-router";

export default function RootLayout() {
  return (
      <Stack screenOptions={{headerShown:true,headerStyle:{backgroundColor:'rgba(7,26,93,255)'}}} initialRouteName="index">
        <Stack.Screen name="index" options={{headerTintColor: 'white',title:'Home'}}/>
        <Stack.Screen name="detail" options={{headerTintColor: 'white',title:'Image Detail'}}/>
      </Stack>
  )
}