import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FeedScreen from "../screens/FeedScreen";
import CreatePost from "../screens/CreatePost";
import { isNewBackTitleImplementation } from "react-native-screens";
import ProfileScreen from "../screens/ProfileScreen";

const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="feed"
          component={FeedScreen}
          options={{
            title: "Home",
            headerTitleStyle: {
              fontSize: 22,
              color: "blue",
            },
          }}
        />
        <Stack.Screen
          name="Create post"
          component={CreatePost}
          options={{
            title: "Create Post",
            headerTitleStyle: {
              fontSize: 22,
              color: "blue",
            },
          }}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
