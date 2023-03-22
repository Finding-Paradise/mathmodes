import React from 'react'
import '../styles/ProductCard.css'
import cardStarIcon from '../assets/icons/card-star.svg'
import addToCartIcon from '../assets/icons/add-to-cart.svg'

function ProductCard(props) {
  return (
    <div className="card">
        <img src={require(`../assets/images/${props.cardImageURL}`)} alt="" className='card--img'/>
        <h4 className='card--title'>{props.cardTitle}</h4>
        <span className='card--price'>Price ${props.cardPrice}</span>
        <img src={cardStarIcon} alt="" className='card--star-icon'/>
        <span className='card--rating'>{props.cardRating}</span>
        <button className='card--add-to-cart-btn'><img src={addToCartIcon} alt=""/></button>
    </div>
  )
}

export default ProductCard