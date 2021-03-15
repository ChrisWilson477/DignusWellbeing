import React, { useState } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import { StyleSheet, KeyboardAvoidingView, TouchableOpacity, TextInput, View   } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import colors from '../config/colors';

function InputScreen(props) {
  const [value, onChangeText] = useState('');
  const [clicked, setClicked] = useState(false);
  const [submitted, setSubmitted] = useState(false);



  return (
    <>
      <DropDownPicker
          items={[
              {label: 'Something That Happened', value: 'Something That Happened'},
              {label: 'Recieved News', value: 'Recieved News'},
              {label: 'Consquence of Something Else', value: 'Consquence of Something Else'},
          ]}
          defaultIndex={0}
          placeholder='Pick One'
          containerStyle={{top: 50, width: 300,  height: 40}}
          dropDownStyle={{backgroundColor: 'white'}}
          onChangeItem={() => setClicked(true)}
      />
      {!clicked
        ? null
        : <View>
          <TextInput
            multiline={true}
            numberOfLines={4}
            style={styles.inputBox}
            onChangeText={text => onChangeText(text)}
            placeholder='Why Do You Feel This Way?'
            value={value}
          />
          <TouchableOpacity
          onPress={() => setSubmitted(true)}
          style={styles.btn}
          >
            <Text style={styles.btnText}>Submit</Text>
          </TouchableOpacity>
          </View>
      }
    </>
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: colors.primary,

    top: 150,
    height: 50,
    textAlign: 'center'
  },
  btnText: {
    textAlign: 'center',
    top: 12,
    color: 'white',
  },
  inputBox: {
    height: 40,
    borderColor: colors.primary,
    borderWidth: 1,
    padding: 5,
    top: 100,
    width: 300,
    backgroundColor: 'white',
  },

  inputView:{
    paddingVertical: 20,
    top: 20
  }
})
export default InputScreen;