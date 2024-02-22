import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";

import React from 'react'
import Navigator from "./src/Navigation";

import { Amplify, Auth } from "aws-amplify";

import awsconfig from './amplifyconfiguration.json'
import { withAuthenticator } from 'aws-amplify-react-native';


Auth.configure(awsconfig)
// Amplify.configure({ ...awsconfig, Analytics: { disabled: true } });

const App = () => {
  return (
    <View style={styles.container}>
      
     <Navigator/>
     {/* <ProfileUpdate/>
    <ProfileScreen></ProfileScreen> */}

      <StatusBar style="auto" />
    </View>
  );
};


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

export default withAuthenticator(App);