import React from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import { SafeAreaView, StyleSheet, ImageBackground, Image, View, Dimensions } from 'react-native';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import colors from '../config/colors';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//Amplify
import { withAuthenticator } from 'aws-amplify-react-native';
import Amplify from 'aws-amplify';
import config from '../config/aws-exports';
Amplify.configure({
  ...config,
  Analytics: {
    disabled: true,
  },
});

//Screens
import MoodScreen from './MoodScreen.js';
import QuoteScreen from './QuoteScreen.js';
import ThoughtScreen from './ThoughtScreen.js';
import CarouselCards from '../config/CarouselCards.js';

function HomeScreen({ navigation, signedIn}) {




  return (
    <Container style={styles.container}>

    {/* Header of the Page */}
    {/* <Header style={styles.header}>
      <Left></Left>
      <Body>
        <Title style={styles.title}> Home </Title>
      </Body>
    </Header> */}

    {/* Body of the Home Screen */}

      <ImageBackground imageStyle={{opacity: 0.5}} style={styles.image} source={require('../config/clouds.jpg')}>
        <Body style={styles.homeBody}>
          {/* <View style={styles.quoteBackground}>
            <Icon style={styles.quoteIcon} type='MaterialCommunityIcons' name='comment-quote-outline' />
              <Text style={styles.quote}>Between stimulus and response there is a space. In that space is our power to choose our response. In our response lies our growth and our freedom.</Text>
              <Text style={styles.quote}>Viktor Frankl</Text>
          </View> */}
          <View style={styles.focusText}>
          <Text style={styles.header}>What is Your Focus Today?</Text>
          </View>
          <SafeAreaView style={styles.carousel}>
          <CarouselCards  />
          </SafeAreaView>


        </Body>
       </ImageBackground>


    {/* Footer Of the App */}

    <Footer>
      <FooterTab style={styles.footerTab}>
        <Button vertical onPress={()=> navigation.navigate('Home')}>
          <Icon style={styles.icon} name="home" />
          <Text style={styles.icon}>Home</Text>
        </Button>
        <Button vertical onPress={()=> navigation.navigate('Mood')}>
          <Icon style={styles.icon} type ='FontAwesome5'name="grin-alt" />
          <Text style={styles.icon}>Mood</Text>
        </Button>
        <Button vertical onPress={()=> navigation.navigate('Tracker')}>
          <Icon style={styles.icon} type ='FontAwesome'name="area-chart" />
          <Text style={styles.icon}>Tracker</Text>
        </Button>
        <Button vertical onPress={()=> navigation.navigate('Thought')}>
          <Icon style={styles.icon} type ='FontAwesome5'name="brain"/>
          <Text style={styles.icon}>Thoughts</Text>
        </Button>
      </FooterTab>
    </Footer>
  </Container>
  );
}


const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  carousel:{
    paddingTop: 20
  },
  container: {
    backgroundColor: colors.background,
    position: 'relative',
    height: 1000
  },
  icon: {
    color: 'white'
  },
  focusText:{
    top: 30
  },
  footerTab: {
      backgroundColor: colors.secondary,
      bottom: 0,
    },
  header:{
    color: colors.primary,
    fontSize: 26,
    paddingBottom: 10,
    bottom: 20,
    fontWeight: 'bold'
  },
  homeBody: {
    top: 0,
    opacity: 1,
  },
  image:{
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  quote:{
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'left',
    paddingLeft: 60,
    paddingRight: 10,
    paddingTop: 5,
    bottom: 40

  },
  quoteBackground:{
    backgroundColor: colors.primary,
    height: 130
  },
  quoteIcon:{
    color: 'white',
    fontSize: 50,
    justifyContent: 'center',
    top: 40
  },
  title: {
    flex: 1,
    fontSize: 28,
    top: 10,
    left: -40,
    fontFamily: 'sans-serif-medium'
  },

});

export default withAuthenticator(HomeScreen);


