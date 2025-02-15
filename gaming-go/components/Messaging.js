import React, { useLayoutEffect, useState } from "react";
import {
  View,
  TextInput,
  Text,
  FlatList,
  Pressable,
  SafeAreaView,
  KeyboardAvoidingView,
} from "react-native";
import { stylesChat } from "../config/stylesChat";
// import AsyncStorage from "@react-native-async-storage/async-storage";

import MessageComponent from "./MessageComponent";

const Messaging = ({ route, navigation }) => {
  const [chatMessages, setChatMessages] = useState([
    {
      id: "1",
      text: "Hello btb, welcome!",
      time: "07:50",
      user: "Tomer",
    },
    {
      id: "2",
      text: "Hi fan, thank you! 😇",
      time: "08:50",
      user: "David",
    },
  ]);
  const [message, setMessage] = useState("");
  const [user, setUser] = useState("");

  //👇🏻 Access the chatroom's name and id
  const { name, id } = route.params;

  //👇🏻 This function gets the username saved on AsyncStorage
  //   const getUsername = async () => {
  //     try {
  //       const value = await AsyncStorage.getItem("username");
  //       if (value !== null) {
  //         setUser(value);
  //       }
  //     } catch (e) {
  //       console.error("Error while loading username!");
  //     }
  //   };

  //👇🏻 Sets the header title to the name chatroom's name
  useLayoutEffect(() => {
    navigation.setOptions({ title: name });
    // getUsername();
  }, []);

  /*👇🏻 
        This function gets the time the user sends a message, then 
        logs the username, message, and the timestamp to the console.
     */
  const handleNewMessage = () => {
    const hour =
      new Date().getHours() < 10
        ? `0${new Date().getHours()}`
        : `${new Date().getHours()}`;

    const mins =
      new Date().getMinutes() < 10
        ? `0${new Date().getMinutes()}`
        : `${new Date().getMinutes()}`;

    console.log({
      message,
      user,
      timestamp: { hour, mins },
    });
  };

  return (
    <SafeAreaView style={stylesChat.messagingscreen}>
      <View
        style={[
          stylesChat.messagingscreen,
          { paddingVertical: 15, paddingHorizontal: 10 },
        ]}
      >
        {chatMessages[0] ? (
          <FlatList
            data={chatMessages}
            renderItem={({ item }) => (
              <MessageComponent item={item} user={user} />
            )}
            keyExtractor={(item) => item.id}
          />
        ) : (
          ""
        )}
      </View>

      <KeyboardAvoidingView>
        <View style={stylesChat.messaginginputContainer}>
          <TextInput
            style={stylesChat.messaginginput}
            onChangeText={(value) => setMessage(value)}
          />
          <Pressable
            style={stylesChat.messagingbuttonContainer}
            onPress={handleNewMessage}
          >
            <View>
              <Text style={{ color: "#f2f0f1", fontSize: 20 }}>SEND</Text>
            </View>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Messaging;
