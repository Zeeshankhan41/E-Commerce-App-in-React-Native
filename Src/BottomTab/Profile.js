import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import { bgColor, colors } from '../Style/Style'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage'
let name='';
let email='';
const Profile = () => {
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    name = await AsyncStorage.getItem('NAME');
    email = await AsyncStorage.getItem('EMAIL')
  };
  return (
    <SafeAreaView style={styles.Container}>
      <ScrollView>
      <View style={styles.top}>
      <TouchableOpacity>
      <Icon name="arrow-back" size={25} style={{color:colors.coloe3}}
         onPress={() => navigation.goBack()}/>
      </TouchableOpacity>
        <Text style={styles.txt}>Profile</Text>
     
      </View>

      <Image source={require('../assets/PNG/profile.png')}           // profile
        style={styles.img2}
      />
       <Text style={styles.name}>{name}</Text>
       <Text style={styles.name}>{email}</Text>
       
       <TouchableOpacity style={styles.line}>   
        <Image source={require('../assets/PNG/user.png')} style={styles.image}/>  
        <Text style={styles.detail}>Profile</Text>
       </TouchableOpacity>
       <TouchableOpacity style={styles.line}>
       <Image source={require('../assets/PNG/setting.png')} style={styles.image}/>  
        <Text style={styles.detail}>Setting</Text>
       </TouchableOpacity>
       <TouchableOpacity style={styles.line}>
       <Image source={require('../assets/PNG/location.png')} style={styles.image}/>  
        <Text style={styles.detail}>Address</Text>
       </TouchableOpacity>
       <TouchableOpacity style={styles.line}>
       <Image source={require('../assets/PNG/about.png')} style={styles.image}/>  
        <Text style={styles.detail}>About us</Text>
       </TouchableOpacity>
       <TouchableOpacity style={styles.line}>
       <Image source={require('../assets/PNG/turn-off.png')} style={styles.image}/>  
        <Text style={styles.detail}>Log out</Text>
       </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Profile

const styles = StyleSheet.create({
  Container:{ flex: 1,
    backgroundColor:bgColor.color
   },
  top: {
    flexDirection: 'row',
   
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: colors.color1,
    alignItems: 'center'
  },
  txt: {
    fontSize: 22,
    fontWeight: '700',
    marginLeft:100,
    color: colors.coloe3
  },
  img: {
    width: 35,
    height: 35,
    
    backgroundColor:colors.coloe3
  },
  img2: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginTop: 30,
  },
  name:{
    fontSize:20,
    fontWeight:'600',
    alignSelf:'center',
    color:colors.color2
  },
  detail:{
    fontSize:16,
    fontWeight:'600',
    color:colors.color2,
    marginTop:15,
    marginLeft:15
  },
  line:{
    width:'90%',
    height:50,
    borderBottomWidth:1,
      marginTop:6,
      marginHorizontal:10,
      borderBlockColor:'#8e8e8e',
      flexDirection:'row',
       
  },
  image:{
    width:30,
    height:30,
      alignSelf:"center",
      marginTop:10
  }

})