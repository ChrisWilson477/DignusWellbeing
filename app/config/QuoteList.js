import React from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import { StyleSheet } from 'react-native';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import colors from '../config/colors';
import exampleQuotes from '../config/quotes';
import Quote from './Quote.js';

function QuoteList(props) {
  const randomId =  Math.floor(Math.random() * 5);
  console.log(randomId)
  return (
    <Content>
      {exampleQuotes.map(quote =>
        {quote.id === randomId
          ? <Quote key={quote.id} quote={quote} />
          : null})}
    </Content>
  );
}


export default QuoteList;