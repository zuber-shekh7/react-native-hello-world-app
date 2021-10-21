import React from "react";
import { Text, StyleSheet } from "react-native";

const SubTitle = ({ text }) => {
  return <Text style={styles.subTitle}>{text}</Text>;
};

const styles = StyleSheet.create({
  subTitle: {
    fontSize: 18,
    color: "#fff",
    margin: 10,
  },
});

export default SubTitle;
