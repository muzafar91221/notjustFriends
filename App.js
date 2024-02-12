import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";

import React from 'react'
import Navigator from "./src/Navigation";
import ProfileUpdate from "./src/screens/ProfileUpdate";


const App = () => {
  return (
    <View style={styles.container}>
      
     {/* <Navigator/> */}
     <ProfileUpdate/>

      <StatusBar style="auto" />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {

    flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
    // backgroundColor: "lightgray",
    padding:8,
  },
});

      //   flex: 1,
      //   marginTop:40,
      //   // alignItems:'center',
      //   // justifyContent:'center',
      //   // backgroundColor:'lightgray'
      // },

