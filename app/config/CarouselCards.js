import React from 'react'
import { View } from "react-native"
import Carousel from 'react-native-snap-carousel'
import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from './CarouselCardItem'
import carousel from './carousel.js'

function CarouselCards ()  {
  const isCarousel = React.useRef(null)

  return (
    <View>
      <Carousel
        layout="tinder"
        layoutCardOffset={3}
        ref={isCarousel}
        data={carousel}
        renderItem={CarouselCardItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        inactiveSlideShift={0}
        useScrollView={true}

      />
    </View>
  )
}


export default CarouselCards