import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
  } from "react-native-responsive-dimensions";
  import {bgColor, colors} from '../Style/Style';
import CustomTextinput from '../Common/CustomTextinput'
import CustomButton from '../Common/CustomButton'
import AsyncStorage from '@react-native-async-storage/async-storage'
let isValid = true;
const SignUp = ({ navigation }) => {
    const [name, setname] = useState('');
    const [badname, setbadname] = useState(false);
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [Confpassword, setConfpassword] = useState("");
    const [bademail, setbademail] = useState(false);
    const [badpassword, setbadpassword] = useState(false);
    const [badConfpassword, setbadConfpassword] = useState(false);
    const [buttondisable,setbuttondisable] = useState(false);
    const Save = () => {
        setbuttondisable(true);
        if (name == '') {                    /////
            setbadname(true)
            setbuttondisable(false);
        }
        else {
            setbadname(false);
            if (email == '') {                 /////
                setbademail(true);
                setbuttondisable(false);
            }
            else {
                setbademail(false);
                if (password == '') {               /////
                    setbadpassword(true);
                    setbuttondisable(false);
                } else {
                    setbadpassword(false);
                  
                    if (Confpassword == '') {               /////
                        setbadConfpassword(true);
                        setbuttondisable(false);
                    } else {
                        setbadConfpassword(false)
                        if (password !== Confpassword) {      // use for same password
                            setbadConfpassword(true);
                            setbuttondisable(false);
                        } else {
                            setbadConfpassword(false);
                            saveData();

                        }
                    }

                }
            }
        }
    };
    const saveData = async () => {
        // if (badname == false && 
        //     bademail == false && 
        //     badpassword == false &&
        //     badConfpassword == false)
            await AsyncStorage.setItem('NAME', name);
            await AsyncStorage.setItem('EMAIL', email);
            await AsyncStorage.setItem('PASSWORD', password);
            await AsyncStorage.setItem('CONFPASSWORD', Confpassword);
            navigation.goBack();
    }
    return (
        <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
            <View style={styles.top}>
                 
                 </View>
                <Text style={styles.title}>Register</Text>
                <Text style={styles.title1}>Create an Account</Text>
                <CustomTextinput
                    label={"Full Name"}
                    placeholder='Enter Name id'
                    value={name}
                    onChangeText={txt => {
                        setname(txt);
                    }}
                    icon={require('../assets/PNG/name.png')}
                />
                {
                    badname === true && (
                        <Text style={styles.Badtxt}>Enter a valid Name</Text>
                    )
                }
                <CustomTextinput
                  label={"Email"}
                    placeholder='Enter Email id'
                    icon={require('../assets/PNG/email.png')}
                    value={email}
                    onChangeText={txt => {
                        setemail(txt);
                    }}
                />
                {
                    bademail === true && (
                        <Text style={styles.Badtxt}>Enter a valid Email</Text>
                    )
                }
                <CustomTextinput
                label={"Password"}
                    type={'password'}
                    placeholder='Enter password id'
                    icon={require('../assets/PNG/padlock.png')}
                    value={password}
                    secureTextEntry={true}
                    onChangeText={txt => {
                        setpassword(txt);
                    }}
                    onPress={() => {

                    }}
                />
                {
                    badpassword === true && (
                        <Text style={styles.Badtxt}>Enter a valid Password</Text>
                    )
                }
                <CustomTextinput
                    label={"Confirm Password"}
                    type={'confpassword'}
                    placeholder='Enter Confirm password id'
                    icon={require('../assets/PNG/padlock.png')}
                    secureTextEntry={true}
                    value={Confpassword}
                    onChangeText={txt => {
                        setConfpassword(txt);
                    }}
                    onPress={() => {

                    }}
                />
                {
                    badConfpassword === true && (
                        <Text style={styles.Badtxt}>Enter valid confirm Password</Text>
                    )
                }
                <CustomButton title={"SignUp"}           // Login Button
                    bgColor={"blue"}
                    textcolor={"white"}
                    onPress={() => {
                        Save();
                    }}
                    disabled={buttondisable}
                />
                <View style={styles.txtContainer}>
                    <Text style={styles.txt}>
                        Already have an Account ?
                    </Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Login')}
                    >
                        <Text style={styles.txt1}>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

export default SignUp

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:bgColor.color
    },
    top: { flex: 0.4,
        backgroundColor: 'blue',
         width: '100%',
          height: 160,
           borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50 
           },
    title: {
        marginVertical: responsiveHeight(2),
        fontSize: responsiveFontSize(4),
        fontWeight: '800',
        color: colors.color1       ////////

    },
    title1: {
        marginVertical: responsiveHeight(0.4),
        fontSize: responsiveFontSize(3),
        fontWeight: '700',
        color: colors.color2       ////////

    },
    txtContainer: {
        flexDirection: 'row',
       
    },
    txt: {
        fontSize: responsiveFontSize(2),
        fontWeight: '800',
        marginVertical: responsiveHeight(3.5),
        color:colors.color2
    },
    txt1: {
        fontSize: responsiveFontSize(2.3),
        fontWeight: '800',
        marginVertical: responsiveHeight(3),
        textDecorationLine: 'underline',
        color:colors.color1
    },
    Badtxt: {
        alignSelf: 'flex-start',
        marginHorizontal: responsiveWidth(8),
        color: 'red',
        marginTop: responsiveHeight(1)
    }
})