import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native'
import React, { useState } from 'react'
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";
import CustomTextinput from '../Common/CustomTextinput'
import CustomButton from '../Common/CustomButton'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Loader from '../Common/Loader'
import { bgColor, colors, text } from '../Style/Style';

const Login = ({ navigation }) => {

    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [bademail, setbademail] = useState(false);
    const [badpassword, setbadpassword] = useState(false);

    const [modalVisible, setModalVisible] = useState(false);        // use for modal
    const Data = () => {
        setModalVisible(true);
        if (email == '') {
            setModalVisible(false);
            setbademail(true);
        } else {
            setbademail(false)
            if (password == '') {
                setModalVisible(false);
                setbadpassword(true);
            }
            else {
                setTimeout(() => {
                    setbadpassword(false);
                    getData();
                }, 3000);
            }
        }
    };

    const getData = async () => {
        const mEmail = await AsyncStorage.getItem('EMAIL');
        const mPass = await AsyncStorage.getItem('PASSWORD');
        console.log(mEmail, mPass);
        if (mEmail === email && mPass === password) {
            setModalVisible(false);
            navigation.navigate('Bottomtab')
        } else {
            setModalVisible(false);
            alert('wrong passord');
        }
    };
    return (

        <ScrollView>
            <View style={styles.container}>
                <View style={styles.top}>
                 
                </View>
                <Text style={styles.title}>Login</Text>
                <CustomTextinput
                label={"Email"}
                    placeholder='Enter Email id'
                    icon={require('../assets/PNG/email.png')}
                    value={email}
                    onChangeText={(txt) => {
                        setemail(txt)
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
                />
                {
                    badpassword === true && (
                        <Text style={styles.Badtxt}>Enter a valid Password</Text>
                    )
                }
                <CustomButton title={"Login"}
                    bgColor={"blue"}
                    textcolor={"white"}
                    onPress={() => {
                        Data();
                    
                    }}
               //  onPress={() => navigation.navigate('SignUp')}
                />
                <View style={styles.txtContainer}>
                    <Text style={styles.txt}>
                        Don't have an Account ?
                    </Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('SignUp')}
                    >
                        <Text style={styles.txt1}>SignUp</Text>
                    </TouchableOpacity>
                </View>
                <Loader modalVisible={modalVisible} setModalVisible={setModalVisible}      // use Modal 
                />
                <View
                    style={styles.facbook}>
                    <TouchableOpacity style={{ flexDirection: 'row' }}>
                        <Image source={require('../assets/PNG/facbook.png')} style={{ width: 30, height: 30 }} />
                        <Text
                            style={styles.text}>
                            Continue With Facebook
                        </Text>
                    </TouchableOpacity>
                </View>
                <View
                    style={styles.google}>
                    <TouchableOpacity style={{ flexDirection: 'row' }}>
                        <Image source={require('../assets/PNG/google.png')} style={{ width: 30, height: 30 }} />
                        <Text
                            style={styles.text}>
                            Continue With Google
                        </Text>
                    </TouchableOpacity>
                </View>

            </View>

        </ScrollView>
    )
}

export default Login

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
        marginVertical: responsiveHeight(5),
        fontSize: responsiveFontSize(4),
        fontWeight: '800',
        color: colors.color1       ////////

    },
    txtContainer: {
        flexDirection: 'row'
    },
    txt: {
        fontSize: responsiveFontSize(2),
        fontWeight: '800',
        marginVertical: responsiveHeight(3.5),
        color: colors.color2
    },
    txt1: {
        fontSize: responsiveFontSize(2.3),
        fontWeight: '800',
        marginVertical: responsiveHeight(3),
        textDecorationLine: 'underline',
        color: colors.color1
    },
    Badtxt: {
        alignSelf: 'flex-start',
        marginHorizontal: responsiveWidth(8),
        color: 'red',
        marginTop: responsiveHeight(1)
    },
    facbook: {
        width: "60%",
        height: 44,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FAF0F9',
        borderRadius: 10,

    },
    google: {
        width: "60%",
        height: 44,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FAF0F9',
        borderRadius: 10,
        marginTop: 10,
        marginBottom: 10
    },
    text: {
        fontSize: 11,
        fontWeight: '400',
        color: 'black',
        marginLeft: 10,
        alignSelf: 'center',
    }

})