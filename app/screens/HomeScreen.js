import React from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import { StyleSheet, ImageBackground, Image, View, Dimensions } from 'react-native';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import colors from '../config/colors';


import MoodScreen from './MoodScreen.js';
import QuoteScreen from './QuoteScreen.js';
import ThoughtScreen from './ThoughtScreen.js';

function HomeScreen(props) {




  return (
    <Container style={styles.container}>

    {/* Header of the App */}
    <Header style={styles.header}>
      <Left>
        <Button transparent>
          <Icon name='menu' />
        </Button>
      </Left>
      <Body>
        <Title style={styles.title}><Icon style={styles.icon} type='FontAwesome5' name='spa'/> Dignus Wellbeing</Title>
      </Body>
    </Header>

    {/* Body of the Home Screen */}

      <ImageBackground imageStyle={{opacity: 0.5}} style={styles.image} source={require('../config/clouds.jpg')}>
        <Body style={styles.homeBody}>
          <ThoughtScreen />
        </Body>
       </ImageBackground>


    {/* Footer Of the App */}

    <Footer>
      <FooterTab style={styles.footerTab}>
        <Button vertical>
          <Icon style={styles.icon} name="home" />
          <Text style={styles.icon}>Home</Text>
        </Button>
        <Button vertical>
          <Icon style={styles.icon} type ='FontAwesome5'name="grin-alt" />
          <Text style={styles.icon}>Mood</Text>
        </Button>
        <Button vertical>
          <Icon style={styles.icon} type ='FontAwesome5'name="brain"/>
          <Text style={styles.icon}>Thoughts</Text>
        </Button>
        <Button vertical>
          <Icon style={styles.icon} type ='FontAwesome5' name="quote-left"/>
          <Text style={styles.icon}>Quotes</Text>
        </Button>
      </FooterTab>
    </Footer>
  </Container>
  );
}


const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    position: 'relative',
    height: windowHeight
  },
  icon: {
    color: 'white'
  },
  footerTab: {
      backgroundColor: colors.secondary,
      bottom: 0,
    },
  header:{
    backgroundColor: colors.secondary,
  },
  homeBody: {
    top: 40,
    opacity: 1,
  },
  image:{
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  title: {
    flex: 1,
    fontSize: 28,
    top: 10,
    left: -40,
    fontFamily: 'sans-serif-medium'
  }

});

export default HomeScreen;


        {/* <Button vertical active>
          <Icon type ='FontAwesome5'name="user-circle"/>
          <Text>User</Text>
        </Button> */}