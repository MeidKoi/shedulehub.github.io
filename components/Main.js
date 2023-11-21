import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, Button, Image, Modal, Pressable, View} from 'react-native';
import styled from 'styled-components/native';
import Counter from './Counter';
import Counter2 from './Counter2';

const Main = () => {
  const [buttonPressed, setButtonPressed] = useState(false);
  const [buttonPressed1, setButtonPressed1] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const handleButtonPress = () => {
    setButtonPressed(true);
  }

  const handleButtonPress1 = () => {
    setButtonPressed1(true);
    setModalVisible(true);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Вы успешно зарегестрированы!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Принять</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Image style={styles.logo} source={require("./LOGO.png")}/>
      {buttonPressed ? <Counter2 onButtonPress={handleButtonPress1}/> : <Counter onButtonPress={handleButtonPress} />}
      <StatusBar style="auto"/>
    </SafeAreaView>
  );
};

export default Main;

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
    width: 250,
    height: 30,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
