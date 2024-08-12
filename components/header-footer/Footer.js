import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Footer() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>All rights reserved by SMU, 2023</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "grey", // Background color
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 50,
  },
  text: {
    fontSize: 14,
    color: "#333", 
  }
});
