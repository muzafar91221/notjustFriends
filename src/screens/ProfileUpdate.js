import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import * as ImagePicker from 'expo-image-picker';

const dummy_img =
  "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/user.png";

const ProfileUpdate = () => {
    const[image,setImage]=useState(null);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });

        console.log(result)
    
        if (!result.cancelled) {
          setImage(result.assets[0].uri);
        }
      };

      

  return (
    <View style={styles.container}>
      <View style={styles.headerconatainer}>
        <Image source={{ uri: image || dummy_img }} style={styles.img} />

        <TouchableOpacity onPress={()=>pickImage()} style={styles.chngbtn}>
          <Text style={{ color: "white", fontSize: 15, fontWeight: "400" }}>
            Change photo
          </Text>
        </TouchableOpacity>
      </View>
      <TextInput placeholder="Full Name" style={styles.input}></TextInput>

      {/*save button */}
      <View style={styles.savebtn}>
        <TouchableOpacity style={[styles.chngbtn ,{width:150,alignItems:'center'}]}>
          <Text style={{ color: "white", fontSize: 22, fontWeight: "400" }}>
            Save
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfileUpdate;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
  },
  img: {
    width: "50%",
    aspectRatio: 1,
    borderRadius:100,
  },
  headerconatainer: {
    alignItems: "center",
  },
  chngbtn: {
    backgroundColor: "royalblue",
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
  },
  input: {
    marginTop: 10,
    fontSize: 22,
    padding: 10,
    borderBottomWidth: 2,
   
  },
  savebtn: {
    marginTop:'auto',
    alignItems:'center',
    alignSelf:'stretch',
    
  },
});
