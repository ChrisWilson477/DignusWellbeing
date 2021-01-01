import React, { useState } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import { StyleSheet, View, Image, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import colors from '../config/colors';


function ThoughtScreen({ navigation, scroller }) {

  const [clicked, setClicked] = useState(false);



  return (
    <Container>
      <ImageBackground imageStyle={{opacity: 0.5}} style={styles.backgroundImage} source={require('../config/clouds.jpg')}>
      <Content>
        <Text style={styles.thoughtTextHeader}> Thought Management</Text>

        {!clicked
        ? <ScrollView style={styles.thoughtBody}>
          <Text style={styles.thoughtParagraph}>Our thoughts are powerful. What we think, and how we respond to our thoughts, can make a difference on how we feel. Some of our thoughts, called automatic thoughts, can be particularly unhelpful. When we understand the connection between our thoughts and the way our body responds (physical reactions, moods, and how we behave), we can choose which direction we want to take to improve our wellbeing, we can change the way we think. We are incredibly fortunate to have neuroplasticity which, in a nutshell, means that we are able to change our brain; the connections we make, the thoughts we have, and even the areas of our brain that are activated.</Text>
          <Text style={styles.thoughtParagraph}>Ready to give it a try? </Text>
            <Text style={styles.thoughtText}> All or Nothing Thinking</Text>
              <TouchableOpacity onPress ={()=> setClicked(true)}>
                <Image
                  style={styles.image}
                  source={require('../config/blackWhite.jpeg')}
                  accessible={true}
                  accessibilityLabel={'Black and White Chess Board'}
                />
              </TouchableOpacity>
          </ScrollView>
        : <ScrollView>
            <Image
              style={styles.imageClicked}
              source={require('../config/blackWhite.jpeg')}
            />
              <Text style={styles.paragraph}>
              Only thinking about the ends of a spectrum, black or white, no gray area.Generally, this includes thoughts such as always or never, do or don’t, right or wrong, and forgets all the possibilities in between, such as sometime right, but other times wrong. For example, Janice is a mother to her first child. She has not had much experience with children and feels somewhat anxious about thehuge responsibility she has taken on. She considers each action and decides whether it means she is agood mother or a bad mother. Janice fails to see that there are many variations on actions, in the same way that telling a lie can be considered a “bad” thing, but allowing a little white lie to help your child believe in a specific magical being can be acceptable.
              </Text>
          </ScrollView>}


        {!clicked
        ? <ScrollView style={styles.thoughtBody}>
            <Text style={styles.thoughtText}> Generalizing</Text>
              <TouchableOpacity onPress ={()=> setClicked(true)}>
                <Image
                  style={styles.image}
                  source={require('../config/General.jpg')}
                />
              </TouchableOpacity>
          </ScrollView>
        : <ScrollView>
            <Image
              style={styles.imageClicked}
              source={require('../config/General.jpg')}
              accessible={true}
              accessibilityLabel={'Man with face in palms'}

            />
              <Text style={styles.paragraph}>
              Thinking that if something happened once or twice it will happen again, or if something worked or didn’t work for someone, it will be the same for everyone. Making a broader statement from something more individual. For example: Stephen read about the benefits of yoga for reducing anxiety and stress. He shares with his colleague that he is thinking about starting to practice yoga. His colleague tells him he tried it once and didn’t notice a difference. Stephen decides that yoga doesn’t really work and does not pursue his interest in trying it for himself. Stephen fails to consider that his friend may have not had a good experience, or a good instructor, or even tried the right type of yoga for himself. He failed to consider the individual differences in people and in yoga.
              </Text>
          </ScrollView>}


        {!clicked
        ? <ScrollView style={styles.thoughtBody}>
            <Text style={styles.thoughtText}> Emotional Reasoning</Text>
              <TouchableOpacity onPress ={()=> setClicked(true)}>
                <Image
                  style={styles.bottomImage}
                  source={require('../config/emotionalThinking.png')}
                />
              </TouchableOpacity>
          </ScrollView>
        : <ScrollView>
            <Image
              style={styles.imageClicked}
              source={require('../config/emotionalThinking.png')}
              accessible={true}
              accessibilityLabel={'Brain and heart split down the middle with a microchip background on the brain side and paint splattered on the heart side'}
            />
              <Text style={styles.paragraph}>
              Believing that because we feel a certain way, the situation must be true. For example: Dineshni was a lady in grad school. Her teacher decided to have a fun evening and made a game of jeopardy to practice for the test. Dineshni becomes anxious at having to quickly come up with the answers and feels embarrassed because she is not answering the questions quickly like her classmates. Dineshni believes she is an idiot because she is not coming up with the answers, even though on her tests she always gets nearly perfect grades.
              </Text>
          </ScrollView>}

      </Content>
      </ImageBackground>
    </Container>
  );
}

const styles = StyleSheet.create({
  backgroundImage:{
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center'
    },
    bottomImage:{
      height: 150,
      width: 400,
      right: 7
    },
  image:{
    height: 150,
    width: 450,
  },

  imageClicked:{
    width: 450,
    height: 350
  },
  paragraph:{
    fontSize: 20,
    paddingTop: 15,
    paddingBottom: 20,
    textAlign: 'center'
  },
  thoughtBody: {
    marginHorizontal: 20

  },
  thoughtParagraph:{
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    paddingBottom: 20
  },
  thoughtText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.primary,
    alignSelf: 'center'
  },
  thoughtTextHeader:{
    fontSize: 26,
    fontWeight: 'bold',
    color: colors.primary,
    alignSelf: 'center',
    paddingBottom: 10
  }
});


export default ThoughtScreen;