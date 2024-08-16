import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Carouseldata } from '../Data/Carouseldata'
const Services = () => {
  return (
    <View>
        <Text>Services</Text>
        {/* {Carouseldata.map(item =>(
           <View style={styles.list}>
           <Image source={item.Img} style={styles.image}/>
     
           <Text style={styles.title}>{item.title}</Text>
           </View>
       ))} */}
       </View>
  )
}

export default Services

const styles = StyleSheet.create({
    image:{
        height:90,
        width:100,
        // borderWidth:1
    },
  
})