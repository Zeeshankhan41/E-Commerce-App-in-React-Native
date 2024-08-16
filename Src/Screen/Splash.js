import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { bgColor } from '../Style/Style'
import LottieView from 'lottie-react-native';
const Splash = ({navigation}) => {
  useEffect(()=>{
    setTimeout(()=>{
      navigation.navigate('Login')
    },6700)
   })
  return (
   
    <ScrollView>
      <View style={styles.Container}>
       <View style={{flex:2,justifyContent:"center",alignItems:"center",marginVertical:140}}>
       <Text style={styles.txt}>Well Come</Text>
       <LottieView style={styles.Image} source={require('../Component/Animation.json')} autoPlay loop />
       </View>
   {/* <TouchableOpacity
   onPress={()=>{
     navigation.navigate('Login')
   }}
   >
   <Image source={require('../assets/Image/logo1.png')} style={styles.Image}/>
   </TouchableOpacity> */}
 
 </View> 
    </ScrollView>
    
  )
}

export default Splash

const styles = StyleSheet.create({
  Container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:bgColor.color
  
  },
  txt:{
   fontSize:25,
   fontWeight:'700',
    marginBottom:-60,
    color:"black",
    marginLeft:20
  },
  Image:{
     width:240,
     height:300,
    // marginVertical:10
    
  }
})