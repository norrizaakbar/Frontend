import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./pages/Login";
import Register from "./pages/Register";
import HomeScreen from "./pages/HomeScreen";
import DetailsScreen from "./pages/DetailScreen";
import RoomScreen from "./pages/ChatScreen";
import Messaging from "./components/Messaging";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarActiveTintColor: "tomato",
        }}
      >
        <Stack.Screen
          name="LoginPage"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RegisterPage"
          component={Register}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="DetailScreen" component={DetailsScreen} />
        <Stack.Screen name="ChatScreen" component={RoomScreen} />
        <Stack.Screen name="Messaging" component={Messaging} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
