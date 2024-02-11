import { StyleSheet, View } from 'react-native'
import { StatusBar } from "expo-status-bar";
import React from 'react'
import Navigate from './src/Navigation/Navigate';

const App = () => {
  return (
    <View style={styles.container}>
      <Navigate/>
      <StatusBar style="auto" />
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
        flex: 1,
        marginTop:40,
        // alignItems:'center',
        // justifyContent:'center',
        // backgroundColor:'lightgray'
      },
})