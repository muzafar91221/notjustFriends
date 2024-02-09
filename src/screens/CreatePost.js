import { StyleSheet, Text, View, Image, TextInput, Button } from "react-native";
import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import {
    Entypo
  } from "@expo/vector-icons";

const user = {
  id: "u1",
  image:
    "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg",
  name: "Vadim Savin",
};

const CreatePost = () => {
  const [description, setdescription] = useState("");
  const log = () => {
    console.warn(description);
    setdescription("");
  };
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
  
    console.log(result);
  
    if (!result.canceled) {
      setImage(result.uri);
    }
  };
  return (
    <View style={styles.postcontainer}>
      <View style={styles.header}>
        <Image source={{ uri: user.image }} style={styles.userimage} />
        <Text style={styles.username}>{user.name}</Text>
        <Entypo
          onPress={pickImage}
          name="images"
          size={24}
          color="limegreen"
          style={styles.icon}
        />
      </View>

      <TextInput
        placeholder="whats in your mind"
        multiline
        value={description}
        onChangeText={setdescription}
        style={styles.placeholder}
      />

      <View style={styles.Button}>
        <Button title="Post" onPress={() => log()} />
      </View>
    </View>
  );
};

export default CreatePost;

const styles = StyleSheet.create({
  postcontainer: {
    flex: 1,
    width: "100%",
  },
  header: {
    marginTop: 70,
    flexDirection: "row",
    padding: 10,
    width: "100%",
    alignItems: "center",
  },
  userimage: {
    width: "20%",
    aspectRatio: 1,
    borderRadius: 40,
  },
  username: {
    fontSize: 22,
    fontVariant: "bold",
    marginLeft: 5,
  },
  placeholder: {
    padding: 10,
    fontSize: 22,
    backgroundColor: "white",
    margin: 10,
    borderRadius: 40,
  },
  Button: {
    marginTop: "auto",
    padding: 10,
  },
//   icon
  icon:{
    marginLeft:'auto'
  }
});