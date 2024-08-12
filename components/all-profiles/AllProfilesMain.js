import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "../header-footer/Header";
import Footer from "../header-footer/Footer";
import ListProfiles from "./ListProfiles";

export default function AllProfilesMain({ darkMode }) {
  return (
    <View>
      <Header />
      <Text
        style={[styles.title, darkMode ? { color: "green" } : { color: "red" }]}
      >
        All Profiles Ready to Start!
      </Text>
      <ListProfiles />
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    marginTop: 10,
    fontSize: 16,
  },
});
