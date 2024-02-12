<<<<<<< HEAD
import { FlatList, ScrollView,Pressable,StyleSheet,Image,Text } from "react-native";
import FeedPost from "../components/FeedPost";
import posts from "../../assets/data/posts.json";
import { useNavigation } from "@react-navigation/native";
import {Entypo} from "@expo/vector-icons"


=======
import { FlatList, ScrollView,Pressable,Text,Image,StyleSheet, } from "react-native";
import FeedPost from "../components/FeedPost";
import posts from "../../assets/data/posts.json";
import CreatePost from "./CreatePost";
import { Entypo } from "@expo/vector-icons";
>>>>>>> cb5df535e2b1759b25c30406aed5a72d617c2df2

const img =
  "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/user.png";


const FeedScreen = () => {

  const navigation = useNavigation("Createpost");

  const CreatePost =() =>{
    navigation.navigate("Create post")
    
  }

  return (
    <FlatList data={posts} 
    renderItem={({item}) => <FeedPost post={item}/>} 
    ListHeaderComponent={() => (
      <Pressable onPress={CreatePost} style={styles.header}>
        <Image source={{ uri: img }} style={styles.profileImage} />
        <Text style={styles.name}>What's on your mind?</Text>
        <Entypo
          name="images"
          size={24}
          color="limegreen"
          style={styles.icon}
        />
      </Pressable>
    )}
<<<<<<< HEAD
=======
    
    
    
>>>>>>> cb5df535e2b1759b25c30406aed5a72d617c2df2
    />
  );
};
const styles = StyleSheet.create({
  header: {
    padding: 10,
    paddingVertical: 15,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    backgroundColor: "white",
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 25,
    marginRight: 10,
  },
  name: {
    color: "gray",
  },
  icon: {
    marginLeft: "auto",
  },
});

const styles = StyleSheet.create({
  header:{
    padding: 10,
    paddingVertical: 18,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    backgroundColor: "white",
    marginVertical:5,


  },
  profileImage:{
    width: 40,
    height: 40,
    borderRadius: 25,
    marginRight: 10,
  },
  name: {
    color: "gray",
  },
  icon: {
    marginLeft: "auto",
  },




})
export default FeedScreen;
