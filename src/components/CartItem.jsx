import React, { useContext } from 'react'
import '../styles/CartItem.css'
import TrashCan from '../assets/icons/TrashCan.png'
import { ShopContext } from '../context/ShopContext';

function CartItem(props) {

    const { id, title, price, imageURL } = props.data;
    const {cartItems, addToCart, removeFromCart, updateCartItemCount, deleteFromCart} = useContext(ShopContext)

    return (
        <div className='cartItem'>
            <img src={require(`../assets/images/${imageURL}`)} alt="" />
            <h3 className='cartItem--heading'>{title}</h3>
            <div className="cartItem--countHandler">
                <button onClick={() => removeFromCart(id)}>-</button>
                <input type="text" value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value), id)}/>
                <button onClick={() => addToCart(id)}>+</button>
            </div>
            <h4 className='cartItem--price'>${price}</h4>
            <button id='trashcan' onClick={() => deleteFromCart(id)}><img src={TrashCan} alt="" /></button>
        </div>
    )
}

export default CartItem