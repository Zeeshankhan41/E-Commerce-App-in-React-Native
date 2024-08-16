// import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
// import React from 'react'

// const CustomTextinput = ({ value, onChangeText, placeholder, icon, type }) => {
//     return (
//         <View
//             style={{
//                 width: '90%',
//                 height: 50,
//                 marginTop: 20,
//                 paddingHorizontal: 10,
//                 borderWidth: 1,
//                 borderRadius: 10,
//                 flexDirection: 'row'     // placeholder text row mai ayaga
//             }}>

//             <Image source={icon} style={{ width: 20, height: 20, marginVertical: 12 }}     // use for icon
//             />
//             <TextInput placeholder={placeholder}
//                 value={value}
//                 onChangeText={(txt) => {         // error pr text change honga
//                     onChangeText(txt);
//                 }}
//                 secureTextEntry={type ? true : false}     // use for password
//                 style={{ marginLeft: 10 }} />

//         </View>
//     )
// }

// export default CustomTextinput

// const styles = StyleSheet.create({})


import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
// import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/AntDesign';

const CustomTextinput = ({ label, value, onChangeText, placeholder, secureTextEntry = false }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.input}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor="#A3A3A3"
          secureTextEntry={!isPasswordVisible && secureTextEntry}
        />
        {secureTextEntry && (
          <TouchableOpacity onPress={togglePasswordVisibility} style={styles.iconContainer}>
            <Icon name={isPasswordVisible ? 'eyeo' : 'eye'} size={24}  />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    padding:5
  },
  label: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 8,
    marginHorizontal:10,
    color: 'black',
    fontFamily: 'Roboto-Medium',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 15,
    borderWidth:1,
   // backgroundColor: '#9C9B9F',
    width: "90%",
    height:50,
    justifyContent:'center',
    alignItems:'center'
  },
  input: {
    flex: 1,
     paddingHorizontal: 15,
    fontSize: 16,
    fontWeight:'600',
    fontFamily: 'Roboto-Medium',
    color: "#A3A3A3",

  },
  iconContainer: {
    paddingHorizontal: 10,
  },
});

export default CustomTextinput;