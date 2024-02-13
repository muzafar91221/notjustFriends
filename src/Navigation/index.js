import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FeedScreen from "../screens/FeedScreen";
import CreatePost from "../screens/CreatePost";
import ProfileScreen from "../screens/ProfileScreen";
import ProfileUpdate from "../screens/ProfileUpdate";

const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* feed scren navigation */}
        <Stack.Screen
          name="feed"
          component={FeedScreen}
          options={{
            title: "Home",
            headerTitleAlign:'center',
            headerTitleStyle: {
              fontSize: 22,
              color: "blue",
            },
          }}
        />
        {/* create post navigation */}
        <Stack.Screen
          name="Create post"
          component={CreatePost}
          options={{
            title: "Create Post",
            headerTitleAlign:'center',
            headerTitleStyle: {
              fontSize: 22,
              color: "blue",
            },
          }}
        />
        {/* profile scrreen */}
        <Stack.Screen name="Profile" component={ProfileScreen} options={{ 
          title:'Profile Screen',
          headerTitleAlign:'center',
          headerTitleStyle: {
            fontSize: 22,
            color: "blue",
          },
        
      }} />
      {/* profile update */}
        <Stack.Screen name="update Profile" component={ProfileUpdate} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
