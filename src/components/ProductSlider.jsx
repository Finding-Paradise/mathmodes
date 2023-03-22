import React from 'react'
import '../styles/ProductSlider.css'
import dataForBig from '../productBigData'
import ProductCard from './ProductCard'

function ProductSlider() {

    let cardElements = dataForBig.map(item => {
        return <ProductCard key={item.id} cardImageURL={item.imageURL} cardTitle={item.title} cardPrice={item.price} cardRating={item.rating}/>
    })

  return (
    <div className="product-slider-wrapper">
        {cardElements}
        {cardElements}
    </div>
  )
}

export default ProductSlider