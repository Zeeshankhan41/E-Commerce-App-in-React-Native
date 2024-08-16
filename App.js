import { StyleSheet, Text, View,StatusBar } from 'react-native'
import React from 'react'
import Login from './Src/Screen/Login'
import AppNavigation from './Src/Navigation/AppNavigation'
import { Provider } from 'react-redux'
import MainContainer from './Src/Navigation/MainContainer'
import store from './Src/Redux/Store/Store'

const App = () => {
  return (
   <Provider store={store}>
    <MainContainer/>
   </Provider>

  )
}

export default App

const styles = StyleSheet.create({})


