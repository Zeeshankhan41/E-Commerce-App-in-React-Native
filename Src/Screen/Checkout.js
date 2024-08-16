import { Image, StyleSheet, Text, View, FlatList, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Icons from 'react-native-vector-icons/Entypo';
import Icon from 'react-native-vector-icons/Ionicons';
import { useSelector } from 'react-redux'
import Loader from '../Common/Loader';
import CustomButton from '../Common/CustomButton';
import { bgColor, colors } from '../Style/Style';
const Checkout = ({navigation}) => {
  const [count, SetCount] = useState(0)
  const cartdata = useSelector(state => state.reducer);

  const getTotal = () => {                         /// use for Total price count
    let tempTotal = 0
    cartdata.map(item => {
      tempTotal = tempTotal + item.price *count;
    });
    return tempTotal;
  }
  return (
    <ScrollView style={{ flex: 1 }}>
    <View style={styles.Container}>
   
    <View style={styles.top}>
      <TouchableOpacity>
      <Icon name="arrow-back" size={25} style={{color:colors.coloe3}}
         onPress={() => navigation.goBack()}/>
      </TouchableOpacity>
        <Text style={styles.title}>My Order</Text> 
      </View>
      <FlatList
        data={cartdata}
        renderItem={({ item, index }) => {
          return (
           
              <View style={styles.box}>
                <Image source={item.image} style={styles.img} />
                <View style={{ marginLeft: 10 }}>
                  <Text style={styles.txt}>{item.name}</Text>
                  <Text style={styles.txt}>$ {item.price}</Text>

                  {/* increment decrement */}
                  <View style={styles.count}>
                    <TouchableOpacity onPress={() => SetCount(count - 1)}>
                      <Icons name="squared-minus" size={25}
                        style={{ color: 'blue' }} />
                    </TouchableOpacity>

                    <Text style={{ fontSize: 20, marginHorizontal: 10 }}>{count}</Text>
                    <TouchableOpacity

                      onPress={() => SetCount(count + 1)}      //click karke sum value show(count) karga
                    >
                      <Icons name="squared-plus" size={25}
                        style={{ color: 'blue' }} />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
          )
        }}
      />
              <View style={styles.bottom}>
                <Text style={styles.txt}>Total :</Text>
                <Text style={styles.txt}>{getTotal()}</Text>
              </View>
    </View>
    <View style={{marginBottom:20,marginLeft:25}}>
     <CustomButton title="Order" bgColor={'blue'} textcolor={'white'}
      onPress={() => 
      navigation.navigate('Success')
      }  />
     </View>
   
    </ScrollView>
  )
}

export default Checkout

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
  box: {
    flexDirection: "row",
    width: '90%',
    height: 100,
    backgroundColor: "white",
    marginHorizontal: 10,
    borderRadius: 10,
    marginVertical: 10,
    elevation: 5
  },
  img: {
    width: 100,
    height: 98,
    alignSelf: "center",
    marginLeft: 10
  },
  txt: {
    fontSize: 16,
    fontWeight: '700',
    marginTop: 10
  },
  count: {
    flexDirection: 'row',
    marginLeft: 100
  },
  bottom:{
    flexDirection:'row',
  justifyContent:'space-between',
  marginHorizontal:30,
  borderTopWidth:1,
  marginTop:20
}


})