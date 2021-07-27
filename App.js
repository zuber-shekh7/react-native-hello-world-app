
import React, {useState} from 'react';
import { StyleSheet, TextInput, View, Image, Text } from 'react-native';
import Title from "./src/components/Title"
import SubTitle from './src/components/SubTitle';

const App = () => {
  const [message, setMessage] = useState("");
  const maxLength = 100;
  return (
    <View style={styles.container}>
      <Image source={require('./src/images/email.png')}/>
      <Title text="Zuber Shekh"/>
      <SubTitle text="React Native Developer"/>
      <TextInput
        placeholderTextColor="#fff"
        placeholder="Write a message..."
        style={styles.textInput}
        value={message}
        onChangeText={(text)=>setMessage(text)}
        maxLength={maxLength}
      />
      <Text style={styles.message}>{message?message.split(" ").map(text => text && "😊").join(" "):"Let's Connect"}</Text>
      <Text style={styles.warningMessage}>{maxLength - message.length} characters left</Text>
    </View>
  )
}

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
    borderColor: "grey",
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderWidth:0.5,
    borderRadius: 20,
    width: 150
  },
  message: {
    marginTop: 10,
    color: '#fff'
  },
  warningMessage: {
    marginTop: 10,
    color: "orange"
  }
})

export default App;