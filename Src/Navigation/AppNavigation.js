import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from '../Screen/Login';
import SignUp from '../Screen/SignUp';

import Splash from '../Screen/Splash';
import Bottomtab from '../BottomTab/Bottomtab';
import Checkout from '../Screen/Checkout';
import Success from '../Screen/Success';
import Screen1 from '../Screen/DataTransfer/Screen1';
import Screen2 from '../Screen/DataTransfer/Screen2';
import Screen3 from '../Screen/DataTransfer/Screen3';
const Stack = createNativeStackNavigator();
const AppNavigation = () => {
    
  return (
    <NavigationContainer>
    <Stack.Navigator 
    screenOptions={{headerShown:false}}
    >
      <Stack.Screen name="Screen1" component={Screen1}/> 
       <Stack.Screen name="Screen2" component={Screen2} />
       <Stack.Screen name='Screen3' component={Screen3}/>
      <Stack.Screen name="SignUp" component={SignUp}/>
      <Stack.Screen name='Bottomtab' component={Bottomtab}/>
      <Stack.Screen name='Checkout' component={Checkout}/>
      <Stack.Screen name='Success' component={Success}/>
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default AppNavigation

const styles = StyleSheet.create({})


// import { Image, StyleSheet, Text, View, FlatList, ScrollView, TouchableOpacity } from 'react-native'
// import React, { useState } from 'react'
// import Icons from 'react-native-vector-icons/Entypo';
// import Icon from 'react-native-vector-icons/Ionicons';
// import { useSelector } from 'react-redux'
// import CustomButton from '../Common/CustomButton';
// import { bgColor, colors } from '../Style/Style';

// const Checkout = ({ navigation }) => {
//   const cartdata = useSelector(state => state.reducer);
//   const [counts, setCounts] = useState(cartdata.map(() => 1)); // Initialize count for each item to 1

//   const handleIncrement = (index) => {
//     const newCounts = [...counts];
//     newCounts[index] += 1;
//     setCounts(newCounts);
//   };

//   const handleDecrement = (index) => {
//     const newCounts = [...counts];
//     if (newCounts[index] > 1) {
//       newCounts[index] -= 1;
//       setCounts(newCounts);
//     }
//   };

//   const getTotal = () => { // Calculate the total price
//     return cartdata.reduce((total, item, index) => total + item.price * counts[index], 0);
//   };

//   return (
//     <ScrollView style={{ flex: 1 }}>
//       <View style={styles.Container}>
//         <View style={styles.top}>
//           <TouchableOpacity>
//             <Icon name="arrow-back" size={25} style={{ color: colors.coloe3 }}
//               onPress={() => navigation.goBack()} />
//           </TouchableOpacity>
//           <Text style={styles.title}>My Order</Text>
//         </View>

//         <FlatList
//           data={cartdata}
//           renderItem={({ item, index }) => {
//             return (
//               <View style={styles.box}>
//                 <Image source={item.image} style={styles.img} />
//                 <View style={{ marginLeft: 10 }}>
//                   <Text style={styles.txt}>{item.name}</Text>
//                   <Text style={styles.txt}>$ {item.price}</Text>

//                   {/* Increment Decrement */}
//                   <View style={styles.count}>
//                     <TouchableOpacity onPress={() => handleDecrement(index)}>
//                       <Icons name="squared-minus" size={25} style={{ color: 'blue' }} />
//                     </TouchableOpacity>

//                     <Text style={{ fontSize: 20, marginHorizontal: 10 }}>{counts[index]}</Text>

//                     <TouchableOpacity onPress={() => handleIncrement(index)}>
//                       <Icons name="squared-plus" size={25} style={{ color: 'blue' }} />
//                     </TouchableOpacity>
//                   </View>
//                 </View>
//               </View>
//             )
//           }}
//         />

//         <View style={styles.bottom}>
//           <Text style={styles.txt}>Total :</Text>
//           <Text style={styles.txt}>$ {getTotal()}</Text>
//         </View>
//       </View>

//       <View style={{ marginBottom: 20, marginLeft: 25 }}>
//         <CustomButton title="Order" bgColor={'blue'} textcolor={'white'}
//           onPress={() => navigation.navigate('Success')} />
//       </View>
//     </ScrollView>
//   )
// }

// export default Checkout

// const styles = StyleSheet.create({
//   Container: {
//     flex: 1,
//     backgroundColor: bgColor.color
//   },
//   top: {
//     flexDirection: 'row',
//     paddingHorizontal: 20,
//     paddingVertical: 10,
//     backgroundColor: colors.color1,
//     alignItems: 'center'
//   },
//   title: {
//     fontSize: 22,
//     fontWeight: '700',
//     marginLeft: 80,
//     color: colors.coloe3
//   },
//   box: {
//     flexDirection: "row",
//     width: '90%',
//     height: 100,
//     backgroundColor: "white",
//     marginHorizontal: 10,
//     borderRadius: 10,
//     marginVertical: 10,
//     elevation: 5
//   },
//   img: {
//     width: 100,
//     height: 98,
//     alignSelf: "center",
//     marginLeft: 10
//   },
//   txt: {
//     fontSize: 16,
//     fontWeight: '700',
//     marginTop: 10
//   },
//   count: {
//     flexDirection: 'row',
//     marginLeft: 100
//   },
//   bottom: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginHorizontal: 30,
//     borderTopWidth: 1,
//     marginTop: 20
//   }
// })
