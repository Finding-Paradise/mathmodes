import React, { useContext } from 'react'
import dataForBig from '../productBigData'
import '../styles/ShoppingCart.css'
import { ShopContext } from '../context/ShopContext'
import CartItem from './CartItem'

function ShoppingCart() {

  const {cartItems} = useContext(ShopContext)
  return (
    <>
      <h1 className='shopping-cart--heading'>Shopping Cart</h1>
      <div className="shopping-cart--items">
        {dataForBig.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem key={product.id} data={product}/>
          } else {
            return null
          }
        })}
      </div>
    </>
  )
}

export default ShoppingCart