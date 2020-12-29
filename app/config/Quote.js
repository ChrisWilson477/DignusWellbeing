import React from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import { StyleSheet } from 'react-native';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import colors from '../config/colors';
import exampleQuotes from '../config/quotes';

function Quote ({quote}) {




  return (

      <Content>
        <Body>
          <Text>{quote.quote}</Text>
          <Text>{quote.author}</Text>
        </Body>
      </Content>

  );
}
export default Quote;