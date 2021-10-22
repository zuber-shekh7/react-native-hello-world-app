import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Hello World App</Text>
      <Text style={styles.subHeading}>Developed by Zuber Shekh</Text>
      <Text style={styles.subHeading}>React Native Support</Text>
      <Text style={styles.subHeading}>Version: 0.1</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#02B290",
  },
  heading: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
  subHeading: {
    marginTop: 10,
    color: "#fff",
    fontSize: 15,
  },
});
