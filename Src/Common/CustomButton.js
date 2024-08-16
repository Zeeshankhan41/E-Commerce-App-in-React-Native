import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const CustomButton = ({onPress,title,bgColor,textcolor}) => {
  return (
     <TouchableOpacity
     style={{
        backgroundColor:bgColor,
        justifyContent:'center',
        alignItems:'center',
        width:"90%",
        height:50,
        borderRadius:10,
        marginTop:40
     }}
     onPress={()=>{
        onPress()
     }}
     >
     <Text style={{color:textcolor,fontSize:17,fontWeight:'800'}}>{title}</Text>
     </TouchableOpacity>
  )
}

export default CustomButton

const styles = StyleSheet.create({})

