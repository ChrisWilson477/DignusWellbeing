import React from 'react'
import { View, Text, StyleSheet, Dimensions, Image, Button, TouchableOpacity } from "react-native"
import colors from './colors.js'
import { useNavigation } from '@react-navigation/native';
export const SLIDER_WIDTH = Dimensions.get('window').width + 80
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7)




function CarouselCardItem ({ item, index}) {
  // const navigation = useNavigation();

  return (
    <TouchableOpacity style={styles.container} key={index}>
      <Image
        source={{ uri: item.imgUrl }}
        style={styles.image}
        onPress={()=> navigation.navigate('Mood')}
      />

      <Text style={styles.header}>{item.title}</Text>

    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 8,
    width: ITEM_WIDTH,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  image: {
    width: ITEM_WIDTH,
    height: 400,
  },
  header: {
    color: colors.primary,
    fontSize: 28,
    fontWeight: "bold",
    paddingLeft: 20,
    textAlign: 'center'
  },
  body: {
    color: "#222",
    fontSize: 18,
    paddingLeft: 20,
    paddingLeft: 20,
    paddingRight: 20
  }
})

export default CarouselCardItem