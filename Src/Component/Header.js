import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import  Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Icon } from '../Style/Style';
const Header = () => {
  return (
    <View>
       <LinearGradient colors={['#062DF1', '#1B3FF5', '#3F5DF0']} style={styles.container}>
            
            <View style={styles.box}>
            <View style={styles.row}>
            <Ionicons name="search" size={Icon.size} color={Icon.color4}/>
            <TextInput placeholder='Search'      
            placeholderTextColor={Icon.color4}
            style={styles.input}
            />
           
            </View>
             <AntDesign name="scan1" size={Icon.size} color={Icon.color4}/>
            </View>
            
             <Ionicons name="mic" size={Icon.size} color={Icon.color4}/>
        </LinearGradient>
    
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container:{
        padding:10,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    box:{
        width:'90%',
        justifyContent:'space-between',
        flexDirection:"row",
        alignItems:'center',
        borderWidth:1,
        borderColor:'black',      ///
       backgroundColor:'white',    ////
        borderRadius:8,
        paddingHorizontal:10,
       elevation:5
    },
    row:{
        flexDirection:'row',
        alignItems:'center'
    },
    input:{
        padding:8
    }
})