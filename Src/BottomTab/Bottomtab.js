import  React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Home from './Home';
import Search from './Search';
import Cart from './Cart';
import Profile from './Profile';
import Washlist from './Washlist';
import { Text, View ,StyleSheet} from 'react-native';
import { Icon, colors } from '../Style/Style';
import { useSelector } from 'react-redux';

const Tab = createBottomTabNavigator();

// const data = useSelector(state => state);
// console.log(data);

function Bottomtab() {
   const data = useSelector(state => state);           // data count honga next scr(cart/washlist mai check krskty ha)
//  console.log(data);
  return (
    <Tab.Navigator 

    screenOptions={{
      tabBarStyle: {height: 55},
      tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor:'black',
      tabBarActiveBackgroundColor:"blue",
     
    }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown:false,
          tabBarLabel:'',
         
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={Icon.size} />
          ),
        }}
      >
        
      </Tab.Screen>
      
      <Tab.Screen
      name="Cart"
      component={Cart}
      options={{
        headerShown:false,
        tabBarLabel:'',
        tabBarIcon:({color,size})=>(
         <View >
           <MaterialCommunityIcons name="cart"  color={color} size={Icon.size}/>
        
           <View style={styles.notification}>   
             <Text style={{                     // /// styling for notification
              color:'white',
              fontWeight:'600'
             }}>
              {data.reducer.length}
              {/* {'0'} */}
              </Text>
           </View>
         </View>
        )
      }}
      />
       <Tab.Screen
        name="Washlist"
        component={Washlist}
        options={{
          headerShown:false,
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <View>
            <MaterialIcons name="favorite-border" color={color} size={Icon.size} />
            <View style={styles.notification2}>   
             <Text style={{                     // /// styling for notification
              color:'white',
              fontWeight:'600',
                 marginLeft:6                   
             }}>                                    
               {data.reducer2.length}         {/*   use for favorite (washist) */}
              </Text>                  
           </View>
            </View>
          ),
        }}
      /> 
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown:false,
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={Icon.size} />
          ),
        }}
      /> 
    </Tab.Navigator>
  );
}
export default Bottomtab
const styles = StyleSheet.create({
notification:{
            width:18,
            height:22,
            backgroundColor:'red',
            borderRadius:7,
            justifyContent:'center',
            alignItems:'center',
            position:'absolute',
            bottom:15,
            left:22
           },
notification2:{
            width:18,
            height:22,
            backgroundColor:'red',
            borderRadius:7,
             justifyContent:'center',
             alignItems:'center',
            position:'absolute',
            bottom:15,
            left:20
           }
})