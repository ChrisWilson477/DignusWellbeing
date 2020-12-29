import React, { useState } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import { StyleSheet, View, TouchableOpacity, TextInput } from 'react-native';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import colors from '../config/colors';
import InputScreen from './InputScreen.js';

function MoodScreen(props) {

  const [clicked, setClicked] = useState(false);


  return (

      <Content style={styles.moodContent}>
        { !clicked
        ? <Text style={styles.moodText}>How are we feeling today?</Text>
        : <Text style={styles.moodText}>Why do we feel this way?</Text>}

        { !clicked
        ? <Body style={styles.moodBody}>
            <TouchableOpacity onPress ={()=> setClicked(true)}>
              <View>
                <Icon style={styles.circleIcon} />
                <Icon style={styles.icon} type ='FontAwesome5'name="grin-beam" />
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress ={()=> setClicked(true)}>
              <View>
                <Icon style={styles.circleIcon}/>
                <Icon style={styles.icon} type ='FontAwesome5'name="grin" />
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress ={()=> setClicked(true)}>
              <View>
                <Icon style={styles.circleIcon}/>
                <Icon style={styles.icon} type ='FontAwesome5'name="meh" />
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress ={()=> setClicked(true)}>
              <View>
                <Icon style={styles.circleIcon}/>
                <Icon style={styles.icon} type ='FontAwesome5'name="frown" />
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress ={()=> setClicked(true)}>
              <View>
                <Icon style={styles.circleIcon}/>
                <Icon style={styles.icon} type ='FontAwesome5'name="tired" />
              </View>
            </TouchableOpacity>
          </Body>
        : <InputScreen />}


      </Content>

  );
}


const styles = StyleSheet.create({
  circleIcon: {
    position:'absolute',
    top: 12,
    left: 11,
    borderRadius: 50,
    width:45,
    height:44,
    backgroundColor:'#ffd700'
  },
  icon: {
    color: colors.primary,
    fontSize: 50,
    paddingHorizontal: 10,
    paddingVertical: 10
  },

  moodBody: {
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  moodContent: {
    width: '100%',
    height: 30,

  },
  moodText: {
    alignSelf: 'center',
    fontSize: 26,
    fontWeight: 'bold',
    color: colors.primary

  },

});

export default MoodScreen;

