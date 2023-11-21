import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, Image, Button, View } from 'react-native';

const image = "./icon.png";

export default function Main() {
  return (
    <View style={styles.container}>
      <Text style={styles.font}><Image style={styles.logo} source={require("./LOGO.png")}/></Text>
      <StatusBar style="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1790f9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  font:{
    fontSize: 40,
    color: 'white'
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 250,
    height: 30,
  },
});
