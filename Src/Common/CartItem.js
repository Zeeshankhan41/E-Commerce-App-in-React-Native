import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { bgColor, colors } from '../Style/Style'
import { additemtoCard } from '../Redux/Action/Action'
import { responsiveHeight } from 'react-native-responsive-dimensions'

const CartItem = ({ item,onRemoveItem,onaddtoWashlist,isWishlist,onremovefromwashlist,onadditemtoCard, }) => {
    return (
        <View style={styles.container}>
            <View style={styles.top}>
            <Image source={item.image} style={styles.Img} />
           
            <View style={{marginLeft:12,marginVertical:10}}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>{"$" + item.price}</Text>

            <View >
             
             {isWishlist ? (
              <TouchableOpacity style={styles.btn}
              onPress={() => {
                  onadditemtoCard(item);               // use for add card (redux)
              }}
          >
              <Text style={styles.btntxt}>Add to Cart</Text>
          </TouchableOpacity>
             ):(
              <TouchableOpacity style={styles.btn}
              onPress={() => {
                  onRemoveItem();               // use for remove card (redux)
              }}
          >
              <Text style={styles.btntxt}>Remove data</Text>
          </TouchableOpacity>
             )}
              
             
          </View>
            </View>
            </View>
         
            {isWishlist?(
                   <View>
                   <TouchableOpacity style={styles.heart}
                    onPress={() => {
                       onremovefromwashlist();               // use for remove data washlist 
                   }}                                        // washlist mai call kardy
                   >
                       <Image source={require('../assets/PNG/heartfill.png')} style={{ width: 24, height: 24,tintColor:'red' }} />
                   </TouchableOpacity>
               </View>
   
            ):(
                <View>
                <TouchableOpacity style={styles.heart}
                 onPress={() => {
                    onaddtoWashlist(item);               // send data from washlist
                }}
                >
                    <Image source={require('../assets/PNG/heart.png')} style={{ width: 24, height: 24 }} />
                </TouchableOpacity>
            </View>

            )}
           
        </View>
    )
}

export default CartItem

const styles = StyleSheet.create({
    container: {
        width: '90%',
        height: responsiveHeight(20.5),
        borderRadius: 10,
        elevation: 20,
        backgroundColor: bgColor.color,
        marginLeft: 20,
        marginVertical: responsiveHeight(1)
    },
    top:{
        flexDirection:"row"
    },
    Img: {
        width: "50%",
        height: "94%",
        resizeMode: 'cover',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10
    },
    name: {
        fontSize: 16,
        fontWeight: '700',
        marginLeft: 10,
        marginTop: responsiveHeight(1),

        color: colors.color2
    },
    // bottom: {
    //     flexDirection: 'row',
    //     justifyContent: 'space-between',
    //     paddingLeft: 10,
    //     paddingRight: 10,
    //     marginTop: 10
    // },
    price: {
        fontSize: 16,
        fontWeight: '600',
        marginLeft: 10,
        marginTop: responsiveHeight(1.3),
        color: colors.color2
    },
    btn: {
        width:100,
        height:40,
      marginTop:responsiveHeight(4),
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        marginVertical:10,
        backgroundColor: colors.color1
    },
    btntxt: {
        fontSize: 12,
        fontWeight: '700',
        color: colors.coloe3
    },
    heart: {
        width: 40,
        height: 40,
        backgroundColor: colors.coloe3,
        borderRadius: 20,
        elevation: 5,
        position: 'absolute',
        left: 10,
        bottom: 100,
        justifyContent: 'center',
        alignItems: 'center'
    }
})