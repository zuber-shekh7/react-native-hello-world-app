import React, { useState } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";
import Title from "./src/components/Title";
import SubTitle from "./src/components/SubTitle";

const App = () => {
  const [message, setMessage] = useState("");
  const maxLength = 100;
  const [bcgColor, setBcgColor] = useState("#000000");

  const backgroundColors = [
    "#B9345A",
    "#1B98F5",
    "#03203C",
    "#1FAA59",
    "#38CC77",
    "#E8BD0D",
    "#758283",
    "#242B2E",
    "#0D0D0D",
    "#6A1B4D",
  ];

  const handleOnClick = () => {
    setBcgColor(pickRandomBackgroundColors());
  };

  const pickRandomBackgroundColors = () => {
    const index = Math.floor(Math.random() * backgroundColors.length);
    return backgroundColors[index];
  };

  return (
    <View style={[styles.container, { backgroundColor: bcgColor }]}>
      <TouchableOpacity onPress={() => handleOnClick()}>
        <Image source={require("./src/images/email.png")} />
      </TouchableOpacity>
      <Title text="Zuber Shekh" />
      <SubTitle text="React Native Developer" />
      <TextInput
        placeholderTextColor="#fff"
        placeholder="Write a message..."
        style={styles.textInput}
        value={message}
        onChangeText={(text) => setMessage(text)}
        maxLength={maxLength}
      />
      <Text style={styles.message}>
        {message
          ? message
              .split(" ")
              .map((text) => text && "😊")
              .join(" ")
          : "Let's Connect"}
      </Text>
      <Text style={styles.warningMessage}>
        {maxLength - message.length} characters left
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#111",
  },

  textInput: {
    marginTop: 5,
    color: "#fff",
    borderColor: "#fff",
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderWidth: 0.5,
    borderRadius: 20,
    width: 150,
  },
  message: {
    marginTop: 10,
    color: "#fff",
  },
  warningMessage: {
    marginTop: 10,
    color: "#fff",
  },
});

export default App;
