import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { bgColor, colors } from '../Style/Style';
const Success = ({navigation}) => {
  return (
   <ScrollView>
     <View style={styles.Container}>
     <View style={styles.top}>
      <TouchableOpacity>
      <Icon name="arrow-back" size={25} style={{color:colors.coloe3}}
         onPress={() => navigation.goBack()}/>
      </TouchableOpacity>
        <Text style={styles.title}>Thanks</Text> 
      </View>

      <View style={{alignItems:'center',marginTop:180}}>
      <Image source={require('../assets/PNG/checked.png')} style={{width:40,height:40}}/>
      <Text style={styles.txt}>Your Order Successfully !</Text>
      <TouchableOpacity style={styles.btn}
          onPress={() => 
            navigation.navigate('Home')
            }
      >
        <Text style={styles.txt2}>Go to Home</Text>
      </TouchableOpacity>
      </View>
    </View>
   </ScrollView>
  )
}

export default  Success

const styles = StyleSheet.create({
    Container:{
        flex:1,
        backgroundColor:bgColor.color
    },
    top: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: colors.color1,
        alignItems: 'center'
      },
      title: {
        fontSize: 22,
        fontWeight: '700',
       marginLeft:80,
        color: colors.coloe3
      },
    txt:{
        fontSize:20,
        fontWeight:'800',
        color:'black',

    },
    btn:{
        width:100,
        height:40,
        borderWidth:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'blue',
        borderRadius:10,
        marginTop:10
    },
    txt2:{
        fontSize:16,
        fontWeight:'700',
        color:'white',

    },
})