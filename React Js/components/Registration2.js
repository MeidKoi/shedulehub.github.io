import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, Button, Image} from 'react-native';
import styled from 'styled-components/native';
import Counter2 from './Counter2';



export default function Regisration2({navigation}) {
  const loadScene = () => {
    navigation.navigate('New');
}
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.font}><Image style={styles.logo} source={require("./icon.png")}/>SheduleHub</Text>
      <Counter2 navigation={navigation}></Counter2>
      <StatusBar style="auto"/>
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
  box: {
    padding: 50,
    width: 50,
    height: 10,
    backgroundColor: '#1790f9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  font:{
    fontSize: 30,
    color: 'white'
  },
  logo: {
    width: 25,
    height: 25,
  },
});
