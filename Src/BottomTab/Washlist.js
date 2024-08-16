import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import CartItem from '../Common/CartItem';
import { useSelector, useDispatch } from 'react-redux';
import { removefromCart, removefromWashlist,onadditemtoCard,additemtoCard } from '../Redux/Action/Action';
import { bgColor } from '../Style/Style';

const Washlist = () => {
  const [cartlist, setcartlist] = useState([]);
  const cartdata = useSelector(state => state.reducer2);
  const dispatch = useDispatch();       // use for remove item
  return (
    <View style={{ flex: 1,backgroundColor:bgColor.color }}>
      {/* <FlatList
        data={cartdata}
        renderItem={({ item, index }) => {
          return <CartItem 
          isWishlist={'save'}
          item={item}
          onremovefromwashlist={()=>{                      // use for data remove
            dispatch(removefromWashlist(index));      
          }}
          
          onadditemtoCard={(x) => {                     /// data card mai send hojyga
              dispatch(additemtoCard(x));          //// Action.js se name call kai
            }} />;
        }}
      /> */}
      
      {cartdata.length>0?(
          <FlatList
          data={cartdata}
          renderItem={({ item, index }) => {
            return <CartItem 
            isWishlist={'save'}
            item={item}
            onremovefromwashlist={()=>{                      // use for data remove
              dispatch(removefromWashlist(index));      
            }}
            
            onadditemtoCard={(x) => {                     /// data card mai send hojyga
                dispatch(additemtoCard(x));          //// Action.js se name call kai
              }} />;
          }}
        />
      ):(
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Text>No Item Added in Favrite</Text>               
      </View>
      )}
    </View>
  )
}

export default Washlist

const styles = StyleSheet.create({})