import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";
import FeedPost from "../components/FeedPost";
import React, { useEffect } from "react";
import user from "../../assets/data/user.json";
import { useNavigation } from "@react-navigation/native";
import { LogBox } from "react-native";
import { Auth } from "aws-amplify";

import {
  AntDesign,
  MaterialCommunityIcons,
  MaterialIcons,
  Ionicons,
  Entypo,
} from "@expo/vector-icons";

const bg = "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg";
const dummy_img =
  "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/elon.png";

// component

const ProfileScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
  }, []);

  const signout = () => {
    Auth.signOut()
  };

  return (
    <View style={styles.headerconatainer}>
      <ScrollView>
        <View style={styles.header}>
          <Image source={{ uri: bg }} style={styles.image} />
          <Image source={{ uri: dummy_img }} style={styles.porfileImage} />
          <Text style={styles.name}>ProfileScreen</Text>
        </View>

        {/* button container */}
        <View style={styles.buttoncontainer}>
          <TouchableOpacity style={styles.btn}>
            <AntDesign name="plus" size={18} width={19} color={"white"} />
            <Text style={styles.btntxt}>Add to story</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate("update Profile")}
          >
            <MaterialCommunityIcons
              name="pencil"
              size={18}
              width={22}
              color={"white"}
            />
            <Text style={styles.btntxt}>Edit Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.btn, { width: "50", flex: 0, aspectRatio: 1 }]}
            onPress={() => signout()}
          >
            <MaterialCommunityIcons
              name="logout"
              size={18}
              width={22}
              color={"white"}
            />
          </TouchableOpacity>
        </View>

        {/* data texxt  */}
        <View style={styles.textdata}>
          <View style={styles.textLine}>
            <Entypo
              name="graduation-cap"
              size={18}
              color="gray"
              style={{ width: 25 }}
            />
            <Text>Graduated university</Text>
          </View>

          <View style={styles.textLine}>
            <Ionicons
              name="time"
              size={18}
              color="gray"
              style={{ width: 25 }}
            />
            <Text>Joined on October 2013</Text>
          </View>

          <View style={styles.textLine}>
            <Entypo
              name="location-pin"
              size={18}
              color="gray"
              style={{ width: 25 }}
            />
            <Text>From Tenerife</Text>
          </View>
        </View>

        <Text style={styles.posttxt}>Posts</Text>

        <FlatList
          data={user.posts}
          renderItem={({ item }) => <FeedPost post={item} />}
        />
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  headerconatainer: {
    flex: 1,
  },
  header: {
    alignItems: "center",
    paddingVertical: 10,
  },
  image: {
    width: "100%",
    height: 250,
    marginBottom: -100,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  porfileImage: {
    width: "40%",
    aspectRatio: 1,
    borderRadius: 80,
    borderWidth: 5,
    borderColor: "#ffffff",
  },
  name: {
    fontSize: 22,
    fontWeight: "500",
    marginTop: 5,
  },
  //   buttons

  buttoncontainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingVertical: 7,
  },

  btn: {
    backgroundColor: "royalblue",
    padding: 8,
    borderRadius: 10,
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  btntxt: {
    color: "white",
    fontSize: 20,
    fontWeight: "500",
  },
  //   data text
  textLine: {
    flexDirection: "row",
    paddingVertical: 10,
    alignSelf: "stretch",
    alignItems: "center",
  },
  textdata: {
    marginTop: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  //
  posttxt: {
    fontSize: 25,
    fontWeight: "700",
    margin: 10,
    color: "gray",
  },
});
