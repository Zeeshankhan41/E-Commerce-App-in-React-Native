import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import Header from '../Component/Header'
import Carousel from '../Component/Carousel'
import { productlist } from '../Data/Productlist'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { bgColor, colors } from '../Style/Style'
import Productitem from '../Common/Productitem'
import { useDispatch } from 'react-redux'
import { additemtoCard, addtoWashlist } from '../Redux/Action/Action'


const Home = () => {
 // const data=useSelector(state => state);                  /// use fpr only data show on console
  //console.log(data);

  const dispatch = useDispatch();                           // use for reduc
  const [categorylist, setcategorylist] = useState([]);
  const [Tshirtlist, setTshirtlist] = useState([]);
  const [shoeslist, setshoeslist] = useState([]);
  const [jeanslist, setjeanslist] = useState([]);
  const [mobilelist, setmobilelist] = useState([]);
  useEffect(() => {
  //  console.log(productlist);
    let tempCategory = [];
    productlist.category.map(item => {
      tempCategory.push(item);
    });
    setcategorylist(tempCategory);
    setTshirtlist(productlist.category[0].data);
    setshoeslist(productlist.category[1].data);
    setjeanslist(productlist.category[2].data);
    setmobilelist(productlist.category[3].data);
    // setcategorylist(categorylist);
    // console.log(JSON.stringify(productlist.category[0]));
  }, []);

  // const items = useSelector(state => state);      // use for show all data on console (reduce)
  // console.log(items);
  return (
    <ScrollView style={{flex:1}}>
      <View style={styles.contaner}>
        <Header />
        <Carousel />
        <View>
          <Text style={styles.txt}>Category</Text>
          <FlatList
            data={categorylist}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => {
              return (
                <TouchableOpacity style={styles.category}>
                  <Text style={{ color: 'black', fontWeight: '700' }}>
                    {item.category}
                  </Text>
                </TouchableOpacity>
              )
            }}
          />
        </View>

        <View>
          <Text style={styles.title}>New T Shirt</Text>        
        </View>

        <View>
          <FlatList                                        ///// Tshirt list
            data={Tshirtlist}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => {
              return (
                <Productitem item={item}
                onaddtoWashlist={(x) => {           // use for reduc (cart)
                  dispatch(addtoWashlist(item));
                }}
                  onadditemtoCard={(x) => {           // use for reduc (cart)
                    dispatch(additemtoCard(item));
                  }}                                     
                />
              )
            }}
          />
        </View>
                        {/* shoes list */}
        <View>
          <Text style={styles.title}>Shoes</Text>
        </View>
         <View>
          <FlatList
            data={shoeslist}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => {
              return (
                <Productitem item={item}
                onaddtoWashlist={(x) => {           // use for reduc (cart)
                  dispatch(addtoWashlist(item));
                }}
                  onadditemtoCard={(x) => {           // use for reduc (cart)
                    dispatch(additemtoCard(item));
                  }}                                     
                />
              )
            }}
          />
        </View>
                             {/* Jeans list */}
        <View>
          <Text style={styles.title}>Jeans & Pants</Text>
        </View>
        <View>
          <FlatList
            data={jeanslist}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => {
              return (
                <Productitem item={item}
                onaddtoWashlist={(x) => {           // use for reduc (cart)
                  dispatch(addtoWashlist(item));
                }}
                  onadditemtoCard={(x) => {           // use for reduc (cart)
                    dispatch(additemtoCard(item));
                  }}                                     
                />
              )
            }}
          />
        </View>

                       {/* Mobile list */}
                       <View>
          <Text style={styles.title}>Mobile</Text>
        </View>
         <View>
          <FlatList
            data={mobilelist}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => {
              return (
                <Productitem item={item}
                onaddtoWashlist={(x) => {           // use for reduc (cart)
                  dispatch(addtoWashlist(item));
                }}
                  onadditemtoCard={(x) => {           // use for reduc (cart)
                    dispatch(additemtoCard(item));
                  }}                                     
                />
              )
            }}
          />
        </View>
      </View>
    </ScrollView>
  )
}

export default Home

const styles = StyleSheet.create({
  contaner: {
    flex: 1,
    backgroundColor:bgColor.color
  },
  category: {
    width:100,
    height:40,
    marginLeft: responsiveWidth(3),
    borderWidth: 1,
    borderRadius: 10,
    marginTop: responsiveHeight(1),
    justifyContent:'center',
    alignItems:"center"
  },
  title: {
    marginTop: responsiveHeight(2),
    marginVertical:responsiveHeight(2),
    marginLeft: 25,
    color: colors.color2,
    fontSize: 15,
    fontWeight: '700'
  },
  txt: {
    marginTop: responsiveHeight(2),
    marginVertical:responsiveHeight(1),
    marginLeft: 25,
    color: colors.color2,
    fontSize: 15,
    fontWeight: '700'
  }

})