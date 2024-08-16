import { ActivityIndicator, StyleSheet, Text, View,Button } from 'react-native'
import React,{ useState } from 'react'
import { Modal } from 'react-native';
const Loader = ({modalVisible, setModalVisible}) => {
  return (
    <Modal
    animationType="slide"
    transparent={true}
    visible={modalVisible}
    onRequestClose={() => {
      setModalVisible(!modalVisible);
    }}>
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <View style={styles.modalView}>
     <ActivityIndicator size={40} color={"blue"}/>
       </View>
    </View>
  </Modal>
  )
}

export default Loader

const styles = StyleSheet.create({
  modalView: {
    width:100,
    height:100,
    margin: 20,
    // marginTop:300,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#DCD4D3 ',
    shadowOffset: {
      width: 10,
      height: 20,
    },
    shadowOpacity: 0.25,
    shadowRadius: 24,
    elevation: 5,
  },
})