import React, { useContext } from 'react'
import '../styles/ProductCard.css'
import cardStarIcon from '../assets/icons/card-star.svg'
import addToCartIcon from '../assets/icons/add-to-cart.svg'
import { ShopContext } from '../context/ShopContext'

function ProductCard(props) {

  const {addToCart, cartItems} = useContext(ShopContext)
  
  const cartItemAmount = cartItems[props.id]

  return (
    <div className="card">
        <img src={require(`../assets/images/${props.cardImageURL}`)} alt="" className='card--img'/>
        <h4 className='card--title'>{props.cardTitle}</h4>
        <span className='card--price'>Price ${props.cardPrice}</span>
        <img src={cardStarIcon} alt="" className='card--star-icon'/>
        <span className='card--rating'>{props.cardRating}</span>
        <span className='card--item-amount'>{cartItemAmount > 0 && <>({cartItemAmount})</>}</span>
        <button className='card--add-to-cart-btn' onClick={() => addToCart(props.id)}><img src={addToCartIcon} alt=""/></button>
    </div>
  )
}

export default ProductCard