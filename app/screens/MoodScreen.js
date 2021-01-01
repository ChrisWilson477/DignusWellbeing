import React, { useState } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import { StyleSheet, View, TouchableOpacity, TextInput, ImageBackground } from 'react-native';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import colors from '../config/colors';
import InputScreen from './InputScreen.js';

function MoodScreen({ navigation }) {

  const [clicked, setClicked] = useState(false);


  return (
    <Container>
      <ImageBackground imageStyle={{opacity: 0.5}} style={styles.image} source={require('../config/clouds.jpg')}>
        <Body style={styles.moodContent}>

          { !clicked
          ? <Text style={styles.moodText}>How are we feeling today?</Text>
          : <Text style={styles.moodText}>Why do we feel this way?</Text>}

          { !clicked
          ? <View >
            <View style={styles.moodBody}>
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
              </View>
              <View>
                <Text style={styles.paragraph}>
                  Tracking your moods and what is happening at the time can help you discover some very important details. You might discover what kind of things are a trigger for you, if the climate or weather has any effects on you, and if certain people, places, or activities contribute to your moods.
                </Text>
                </View>

            </View>

          : <InputScreen />}

        </Body>
      </ImageBackground>
    </Container>
  );
}


const styles = StyleSheet.create({
  circleIcon: {
    position:'absolute',
    top: 55,
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
    paddingVertical: 10,
    top: 40
  },
  image:{
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
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
    color: colors.primary,
    top: 25

  },
  paragraph: {
    textAlign: 'center',
    fontSize: 18,
    paddingTop: 100,
    fontWeight: 'bold'

  }

});

export default MoodScreen;

