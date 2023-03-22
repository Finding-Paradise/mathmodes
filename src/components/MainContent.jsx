import React from 'react'
import '../styles/MainContent.css'
import BottomAside from './BottomAside'
import ProductBanner from './ProductBanner'
import ProductSlider from './ProductSlider'

function MainContent() {
  return (
    <div className="main-content">
      <ProductBanner/>
      <ProductSlider />
      <BottomAside />
    </div>
  )
}

export default MainContent