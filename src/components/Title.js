import React from 'react'
import {Text, StyleSheet} from "react-native"

const Title = ({text}) => {
    return (
        <Text style={styles.title}>{text}</Text>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 36,
        fontWeight: "bold",
        color: "#fff",
    }
})
export default Title
