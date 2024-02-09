import { StyleSheet, View } from 'react-native'
import { StatusBar } from "expo-status-bar";
import React from 'react'
import FeedScreen from './src/screens/FeedScreen';
import CreatePost from './src/screens/CreatePost';

const App = () => {
  return (
    <View style={styles.container}>
    {/* <FeedScreen/> */}
      <CreatePost/>
      <StatusBar style="auto" />
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
        flex: 1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'lightgray'
      },
})