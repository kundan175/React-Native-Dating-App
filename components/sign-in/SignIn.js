import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { TextInput } from "react-native-paper";
import React from "react";
import { useState } from "react";

export default function SignIn({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View>
      <Image
        source={require("../../assets/log-in.png")}
        style={{ width: 300, height: 200, marginTop: 50 }}
        resizeMode="contain"
      />
      <TextInput
        outlined
        label="Email address"
        value={email}
        textContentType="emailAddress"
        autoCompleteType="email"
        onChangeText={(text) => {
          setEmail(text);
        }}
        selectionColor="red"
        style={styles.input}
      />
      <TextInput
        outlined
        label="Password"
        value={password}
        textContentType="password"
        autoCompleteType="password"
        onChangeText={(text) => {
          setEmail(text);
        }}
        selectionColor="red"
        style={styles.input}
        secureTextEntry={true}
      />
      <Text
        style={{
          fontSize: 11,
          alignSelf: "center",
          color: "#8f8f8f",
          marginLeft: 130,
        }}
      >
        Forgot your Password?{" "}
      </Text>
      <Pressable
        style={styles.buttonLogin}
        onPress={() => navigation.navigate("DrawNavigation", { email })}
      >
        <Text style={styles.textStyle}>Log In</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    width: "80%",
    backgroundColor: "whitesmoke",
  },
  textStyle: {
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonLogin: {
    borderRadius: 20,
    padding: 10,

    width: 100,
    backgroundColor: "#e5d5da",
  },
});
