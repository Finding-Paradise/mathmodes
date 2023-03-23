import React from 'react'
import '../styles/CartPageNav.css'
import arrowBack from '../assets/icons/back-arrow.svg'
import { Link } from 'react-router-dom'

function CartPageNav() {
  return (
    <nav className="cart-page-nav">
        <Link to={'/'} className='cart-page-nav--link'>
            <img src={arrowBack} alt="" />
            <h2 className="cart-page-nav--heading">Continue Shopping</h2>
        </Link>
    </nav>
  )
}

export default CartPageNav