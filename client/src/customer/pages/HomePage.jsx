import React from 'react'
import ProductCarousel from '../components/ProductCarousel/ProductCarousel.tsx'
import MainCarousel from '../components/HomeCarousel/MainCarousel'

const HomePage = () => {
  return (
    <div>
      <MainCarousel />
      <div>
        <ProductCarousel />
      </div>
    </div>
  )
}

export default HomePage
