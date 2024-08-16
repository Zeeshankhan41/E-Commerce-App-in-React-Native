import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { Categorylist } from '../Data/Categorylist'
const Category = () => {
  return (
    <ScrollView horizontal 
    showsHorizontalScrollIndicator={false}
    style={styles.container}>
       {Categorylist.map(item =>(
           <View style={styles.list}>
           <Image source={item.Image} style={styles.image}/>
     
           <Text style={styles.title}>{item.title}</Text>
           </View>
       ))}
        

  
    </ScrollView>
  )
}

export default Category

const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        padding:10
    },
    image:{
        height:90,
        width:100,
        borderWidth:1
    },
    title:{
        fontSize:10,
        color:"black"
    },
    list:{
        paddingHorizontal:8,
        alignItems:'center',
        // borderWidth:1,
        // borderRadius:50,
        // margin:7
    }
})