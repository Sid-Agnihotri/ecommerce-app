import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import CarouselData from '../../../Data/CarouselData'

// TODO: Make it resuable.
const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
}

const MainCarousel = () => {
  const items = CarouselData.map((item) => (
    <img
      className="cursor-pointer"
      src={item.image}
      alt=""
      role="presentation"
    />
  ))
  return (
    <AliceCarousel
      mouseTracking
      items={items}
      responsive={responsive}
      controlsStrategy="alternate"
      autoPlayInterval={1000}
      infinite
      disableButtonsControls
      disableDotsControls
    />
  )
}

export default MainCarousel
