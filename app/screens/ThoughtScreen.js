import React, { useState } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import colors from '../config/colors';


function ThoughtScreen(props) {

  const [clicked, setClicked] = useState(false);


  return (
    <Content>
      <Text style={styles.thoughtTextHeader}> Thought Management</Text>
      {!clicked
      ? <Body style={styles.thoughtBody}>
          <Text style={styles.thoughtText}> Black and White Thinking</Text>
            <TouchableOpacity onPress ={()=> setClicked(true)}>
              <Image
                style={styles.image}
                source={require('../config/blackWhite.jpeg')}
              />
            </TouchableOpacity>
        </Body>
      : <Body>
          <Image
            style={styles.imageClicked}
            source={require('../config/blackWhite.jpeg')}
          />
            <Text style={styles.paragraph}>
                Polarized thinking or black and white thinking is an irrational thinking characterized by the “all or nothing” principle. People with this unrealistic expectation do not see gray areas in most situations; hence, they often feel frustrated, bitter, and disappointed. For example, an extremely competitive person believes that he should be “number one or nothing at all”. Polarized thinking is one of the most common types of cognitive distortions based on Aaron Beck’s cognitive theory. These different types were developed by David Burns, a student of Beck.
            </Text>
        </Body>}


      {!clicked
      ? <Body style={styles.thoughtBody}>
          <Text style={styles.thoughtText}> Generalization</Text>
            <TouchableOpacity onPress ={()=> setClicked(true)}>
              <Image
                style={styles.image}
                source={require('../config/General.jpg')}
              />
            </TouchableOpacity>
        </Body>
      : <Body>
          <Image
            style={styles.imageClicked}
            source={require('../config/General.jpg')}
          />
            <Text style={styles.paragraph}>
              Generalization refers to a process within operant and classical conditioning, where a conditioned response (CR) starts occurring in response to the presentation of other, similar stimuli, not just the conditioned stimulus (CS). For example, a dog is trained to sit (CR) when you give the command, "sit" (CS). Soon after that, the dog might sit when you say "hit", "bit", and "kick". In this case, the CR (sitting) is not only done to the CS (the command, "sit") but also to commands that are similar.
            </Text>
        </Body>}


      {!clicked
      ? <Body style={styles.thoughtBody}>
          <Text style={styles.thoughtText}> Emotional Thinking</Text>
            <TouchableOpacity onPress ={()=> setClicked(true)}>
              <Image
                style={styles.image}
                source={require('../config/emotionalThinking.png')}
              />
            </TouchableOpacity>
        </Body>
      : <Body>
          <Image
            style={styles.imageClicked}
            source={require('../config/emotionalThinking.png')}
          />
            <Text style={styles.paragraph}>
              Emotional reasoning is an irrational way of thinking characterized by putting too much focus on emotions and ignoring common sense. For instance, a person with this unrealistic thought pattern often believes that what he feels is always true or right. He dangerously bases all of his decisions on gut feel. He would then think that somebody is lying just because he feels that he is. Emotional reasoning is one of the most common types of cognitive distortions based on Aaron Beck’s cognitive theory. These different types were developed by David Burns, a student of Beck.
            </Text>
        </Body>}

    </Content>
  );
}

const styles = StyleSheet.create({
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
    alignItems : 'center',

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