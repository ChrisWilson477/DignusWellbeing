import React, { useState } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import { StyleSheet, KeyboardAvoidingView, TouchableOpacity, TextInput } from 'react-native';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import colors from '../config/colors';

function InputScreen(props) {
  return (
    <Content>

      <KeyboardAvoidingView style={styles.inputView}>
        <Text style ={styles.inputText}>Something happened</Text>
        <TextInput
          style={styles.inputBox}
          onChangeText={text => console.log(text)}
        />
      </KeyboardAvoidingView>
      <KeyboardAvoidingView style={styles.inputView}>
        <Text style ={styles.inputText}>Received news</Text>
        <TextInput
          style={styles.inputBox}
          onChangeText={text => console.log(text)}
        />
      </KeyboardAvoidingView>
      <KeyboardAvoidingView style={styles.inputView}>
        <Text style ={styles.inputText}>Consequence of something else</Text>
        <TextInput
          style={styles.inputBox}
          onChangeText={text => console.log(text)}
        />
      </KeyboardAvoidingView>
      {/* <KeyboardAvoidingView style={styles.inputView}>
        <Text style ={styles.inputText}>Other</Text>
        <TextInput
          style={styles.inputBox}
          onChangeText={text => console.log(text)}
        />
      </KeyboardAvoidingView> */}
    </Content>
  );
}

const styles = StyleSheet.create({
  inputBox: {
    height: 40,
    borderColor: colors.primary,
    borderWidth: 1,

  },
  inputText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.primary
  },
  inputView:{
    paddingVertical: 20,
  }
})
export default InputScreen;