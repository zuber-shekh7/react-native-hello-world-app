import React from "react";
import { View, Text, StyleSheet, Linking } from "react-native";

export default function ConnectScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Let's Connect</Text>
      <Text style={styles.subHeading}>Follow me on </Text>
      <View style={styles.linkContainer}>
        <Text
          style={[styles.link, styles.instaLink]}
          onPress={() => Linking.openURL("https://www.instagram.com")}
        >
          Instagram
        </Text>
        <Text
          style={[styles.link, styles.fbLink]}
          onPress={() => Linking.openURL("https://www.facebook.com")}
        >
          Facebook
        </Text>
        <Text
          style={[styles.link, styles.linkedInLink]}
          onPress={() => Linking.openURL("https://www.linkedin.com")}
        >
          LinkedIn
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#EB4D4B",
  },
  heading: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
  subHeading: {
    color: "#fff",
    fontSize: 20,
  },
  linkContainer: {
    marginTop: 20,
  },
  link: {
    marginTop: 10,
    textAlign: "center",
    backgroundColor: "red",
    color: "#fff",
    fontSize: 25,
    fontWeight: "bold",
    borderWidth: 2,
    padding: 5,
    paddingHorizontal: 20,
    borderColor: "#fff",
    borderRadius: 40,
  },
  instaLink: {
    backgroundColor: "#B9345A",
  },
  fbLink: {
    backgroundColor: "#12B0E8",
  },
  linkedInLink: {
    backgroundColor: "#207398",
  },
});
