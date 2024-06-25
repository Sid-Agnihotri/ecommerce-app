import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import { Button } from '@mui/material'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ProductCard from '../ProductCard/ProductCard'

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 5.5 },
}
const items = [1, 1, 1, 1, 1].map(() => {
  return <ProductCard />
})
const ProductCarousel: React.FC = () => {
  return (
    <div className="relative px-4 lg:px-8 mt-4">
      <div className="relative p-5">
        <AliceCarousel
          responsive={responsive}
          items={items}
          controlsStrategy="alternate"
          autoPlayInterval={1000}
          infinite
          disableButtonsControls
          disableDotsControls
        />
        <Button
          variant="contained"
          color="secondary"
          aria-label="next"
          className="z-50"
          sx={{ position: 'absolute', top: '8rem', right: '0rem' }}
          onClick={() => {
            console.log('test')
          }}
        >
          <ArrowBackIosIcon />
        </Button>
      </div>
    </div>
  )
}

export default ProductCarousel
