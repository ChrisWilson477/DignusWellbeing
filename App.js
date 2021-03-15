import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import { StyleSheet, Pressable } from 'react-native';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

//Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//Authorization
import { Auth } from 'aws-amplify';




import colors from './app/config/colors.js';
import HomeScreen from './app/screens/HomeScreen';
import MoodScreen from './app/screens/MoodScreen';
import ThoughtScreen from './app/screens/ThoughtScreen';
import TrackerScreen from './app/screens/TrackerScreen';



const Stack = createStackNavigator();

 class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
      signedIn: false,
    };
  }


   //SignOut
   signOut = async () => {
    try {
      await Auth.signOut({ global: true });
    } catch (error) {
      console.log('error signing out: ', error);
    }
  };







  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name='Home'
            component={HomeScreen}
            options={{
              title: 'Dignus Wellbeing',
              headerRight:  () => (
              !this.state.signedIn
              ? <Pressable style={styles.button} onPress={() => this.signOut()}>
                 <Text style={styles.buttonText}>Sign out</Text>
                </Pressable>
              : null
              ),
              headerStyle: {
                backgroundColor: colors.secondary,
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                left: 25,
                // alignSelf: 'center',
                fontSize: 28,
              },
            }}
          />
          <Stack.Screen
            name='Mood'
            component={MoodScreen}
            options={{
              title: 'Dignus Wellbeing',
              headerStyle: {
                backgroundColor: colors.secondary,
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontSize: 28,
                alignSelf: 'center',
                right: 25
              },
            }}
          />
          <Stack.Screen
            name='Tracker'
            component={TrackerScreen}
            options={{
              title: 'Dignus Wellbeing',
              headerStyle: {
                backgroundColor: colors.secondary,
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontSize: 28,
                alignSelf: 'center'
              },
            }}
          />
          <Stack.Screen
            name='Thought'
            component={ThoughtScreen}
            options={{
              title: 'Dignus Wellbeing',

              headerStyle: {
                backgroundColor: colors.secondary,
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontSize: 28,
                alignSelf: 'center',
                right: 25
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}


const styles = StyleSheet.create({
  button :{
    backgroundColor: colors.secondary,
    padding: 10,
    borderRadius: 6,
  },
  buttonText:{
    color: '#fff',
    fontSize: 18
  },
  icon: {
    color: 'white',
    right: 50
  }
})

export default App;