import React from 'react'
import CartPageNav from '../components/CartPageNav'
import Payment from '../components/Payment'
import ShoppingCart from '../components/ShoppingCart'
import '../pages/CartPage.css'

function CartPage() {
  return (
    <div className="cart-page">
      <div className="cart-page--left">
        <CartPageNav />
        <ShoppingCart/>
      </div>
      <div className="cart-page--right">
        <Payment />
      </div>
    </div>
  )
}

export default CartPage