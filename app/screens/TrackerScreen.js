import React, { useState } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import { StyleSheet, View, Image, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import colors from '../config/colors';



function TrackerScreen(props) {
  return (
    <Container>
      <ImageBackground imageStyle={{opacity: 0.5}} style={styles.backgroundImage} source={require('../config/clouds.jpg')}>
        <Body>
          <Text style={styles.title}>Mood Tracker</Text>
          <ScrollView>

          <View style={styles.journalContainer}>
                <View>
                  <Text style={styles.date}>01/06/2021</Text>
                </View>
                <View>
                  <Text style={styles.templateText}>I was feeling:</Text>
                  <Text  style={styles.feelingText}>Overly anxious and full of nerves</Text>
                </View>
               <View>
                 <Text style={styles.templateText}>This was Caused by: </Text>
                  <Text  style={styles.option}>Something Happening</Text>
                </View>
            </View>

            <View style={styles.journalContainer}>
                <View>
                  <Text style={styles.date}>01/05/2021</Text>
                </View>
                <View>
                  <Text style={styles.templateText}>I was feeling:</Text>
                  <Text  style={styles.feelingText}>Accomplished and successful</Text>
                </View>
               <View>
                 <Text style={styles.templateText}>This was Caused by: </Text>
                  <Text  style={styles.option}>Recieved News</Text>
                </View>
            </View>

            <View style={styles.journalContainer}>
                <View>
                  <Text style={styles.date}>01/04/2021</Text>
                </View>
                <View>
                  <Text style={styles.templateText}>I was feeling:</Text>
                  <Text  style={styles.feelingText}>Overly anxious and full of nerves</Text>
                </View>
               <View>
                 <Text style={styles.templateText}>This was Caused by: </Text>
                  <Text  style={styles.option}>Something Happening</Text>
                </View>
            </View>


          </ScrollView>
        </Body>
      </ImageBackground>
    </Container>


  );
}

const styles = StyleSheet.create({
  backgroundImage:{
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',

  },
  date:{
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginRight: 5,
    textDecorationLine: 'underline'
  },
  feelingText:{
    fontSize: 18,
    color: 'black',
    left: 9
  },
  journalContainer:{
    borderWidth: 2,
    borderColor: 'black',
    top: 30,
    paddingTop: 20,
    left: 0,
    padding: 10,
    paddingHorizontal: 80,
    margin: 10


  },
  option: {
    fontSize: 18,
    color: 'black',
    left: 9
  },
  templateText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold'
  },
  title:{
    color: colors.primary,
    fontWeight: 'bold',
    fontSize: 28,
    paddingTop: 20,
    top: 5
  }
})
export default TrackerScreen;