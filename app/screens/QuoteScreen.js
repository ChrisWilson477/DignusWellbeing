import React from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import { StyleSheet } from 'react-native';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import colors from '../config/colors';
import exampleQuotes from '../config/quotes';

import Quote from '../config/Quote.js';
import QuoteList from '../config/QuoteList.js';
function QuoteScreen(props) {


  return (
    <Container>
      <Content>
        <Body style={styles.quoteBody}>
         <QuoteList />
        </Body>
      </Content>
    </Container>
  );
}


const styles = StyleSheet.create({
  quoteBody: {
    backgroundColor: colors.secondary,
    alignItems: 'stretch',
    flex: 2

  }
});
export default QuoteScreen;