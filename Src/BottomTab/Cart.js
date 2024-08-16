import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import CartItem from '../Common/CartItem';
import { useSelector, useDispatch } from 'react-redux';
import { addtoWashlist, removefromCart } from '../Redux/Action/Action';
import CustomButton from '../Common/CustomButton';

const Cart = ({navigation}) => {
  const [cartlist, setcartlist] = useState([]);
  const cartdata = useSelector(state => state.reducer);
  const dispatch = useDispatch();       // use for remove item
  return (
    <View style={{ flex: 1 }}>

      {cartdata.length>0?(
         <FlatList
         data={cartdata}
         renderItem={({ item, index }) => {
           return <CartItem 
           onaddtoWashlist={(x)=>{
             dispatch(addtoWashlist(x));
           }}
           item={item}
             onRemoveItem={() => {                     /// cart sy  data remove hojyga
               dispatch(removefromCart(index));          //// Action.js se name call kai
             }} />;
         }}
       />
      ):(                                                    // item na hu tu ya show honga
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
          <Text>No Item Added in Cart</Text>               
        </View>
      )}
     <View style={{marginBottom:20,marginLeft:25}}>
     <CustomButton title="Check Out" bgColor={'blue'} textcolor={'white'}
      onPress={() => navigation.navigate('Checkout')}
     />
     </View>
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({})