import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
<<<<<<< HEAD
import React from "react";

import Navigator from "./src/Navigation";
import ProfileScreen from "./src/screens/ProfileScreen";
=======
import React from 'react'
import Navigate from './src/Navigation/Navigate';
>>>>>>> cb5df535e2b1759b25c30406aed5a72d617c2df2

const App = () => {
  return (
    <View style={styles.container}>
<<<<<<< HEAD

      <Navigator />
      
=======
      <Navigate/>
>>>>>>> cb5df535e2b1759b25c30406aed5a72d617c2df2
      <StatusBar style="auto" />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
<<<<<<< HEAD
    flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
    // backgroundColor: "lightgray",
    padding:8,
  },
});
=======
        flex: 1,
        marginTop:40,
        // alignItems:'center',
        // justifyContent:'center',
        // backgroundColor:'lightgray'
      },
})
>>>>>>> cb5df535e2b1759b25c30406aed5a72d617c2df2
