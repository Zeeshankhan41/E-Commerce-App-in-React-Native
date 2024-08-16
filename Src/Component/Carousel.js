import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SliderBox} from 'react-native-image-slider-box'
import { Carouseldata } from '../Data/Carouseldata'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { Dimensions } from 'react-native'
const Carousel = () => {
  const SCREEN_WIDTH = Dimensions.get('window').width;         
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <SliderBox images={Carouseldata} 
      dotColor="blue"
      inactiveDotColor="white"
      imageLoadingColor="black" /// image ju load hota ha is me jo loading ata ha
      autoplay={true}
      
      autoplayInterval={2000}              //kitni time bad change karna hu
      dotStyle={{}}
      style={styles.Carouseldata}
/>
     
    </View>
  )
}

export default Carousel

const styles = StyleSheet.create({
  Carouseldata:{
    width:'100%',
    height:200,
      marginTop:responsiveHeight(0.5),
      resizeMode:'cover'
  }
})