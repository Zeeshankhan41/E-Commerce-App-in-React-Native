import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import Ionicons from 'react-native-vector-icons/Ionicons'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
const Subheader = () => {
  return (
    <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.container}>
      <Ionicons name="location" size={18} color="red"/>
      <Text style={styles.txt} 
      >Deliver to zeeshan - code 343924</Text>
      <SimpleLineIcons name="arrow-down" size={18} color={"red"}/>
    </LinearGradient>
  )
}

export default Subheader

const styles = StyleSheet.create({
    container:{
    padding:8,
    flexDirection:'row',
    },
    txt:{
        fontSize:13,
        color:'black', ///////////
        paddingHorizontal:18
    }
})