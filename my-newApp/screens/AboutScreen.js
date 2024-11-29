// AboutScreen.js

import React from "react";
import MainLayout from "../layouts/MainLayout";
import { View, Text, StyleSheet } from "react-native";

const AboutScreen = () => {
  const currentDate = new Date().toLocaleDateString();

  return (
    <MainLayout>
      <View style={styles.container}>
        <Text style={styles.title}>About the App</Text>
        <Text style={styles.text}>App Name: My To-Do App</Text>
        <Text style={styles.text}>Created by: [Your Name]</Text>
        <Text style={styles.text}>Date: {currentDate}</Text>
      </View>
    </MainLayout>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: "center",

    justifyContent: "center",
  },

  title: {
    fontSize: 24,

    fontWeight: "bold",

    marginBottom: 20,
  },

  text: {
    fontSize: 18,

    marginVertical: 5,
  },
});

export default AboutScreen;
