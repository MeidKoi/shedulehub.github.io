import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, Button, Image} from 'react-native';
import List from "./ListBlock" 




export default function New({DATA}) {
  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.logo} source={require("./LOGO.png")}/>
      <List></List>
      </SafeAreaView>
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
    fontSize: 30,
    color: 'white'
  },
  logo: {
    width: 250,
    height: 30,
  },
});
