import React, { useContext } from 'react'
import '../styles/Payment.css'
import paymentPfp from '../assets/images/payment-profile.png'
import mastercard from '../assets/images/mastercard.png'
import visa from '../assets/images/visa.png'
import qiwi from '../assets/images/qiwi.png'
import forwardArrow from '../assets/icons/forward-arrow.svg'
import { ShopContext } from '../context/ShopContext'

function Payment() {

    const {getTotalCartAmount} = useContext(ShopContext)
    const totalAmount = getTotalCartAmount()

    return (
        <div className="payment-wrapper">
            <div className="payment--heading-wrapper">
                <h1 className="payment--heading">Card Details</h1>
                <img src={paymentPfp} alt="" />
            </div>
            <div className="payment--card-type-wrapper">
                <h4 className="payment--card-type-heading">Card type</h4>
                <div className="card-option-wrapper">
                    <img src={mastercard} alt="" />
                    <img src={visa} alt="" />
                    <img src={qiwi} alt="" />
                    <div className="see-all"><span className='see-all-span'>See all</span></div>
                </div>
            </div>
            <form action="" className='card-data-form'>
                <label htmlFor="cardHolderName">Cardholder Name</label><br />
                <input type="text" name="cardHolderName" id="cardHolderName" placeholder='Name' /><br />
                <label htmlFor="cardNumber">Card Number</label><br />
                <input type="text" name="cardNumber" id="cardNumber" placeholder='Card Number' /><br />
                <div className="exp-cvv-wrapper">
                    <div className="exp-wrapper">
                        <label htmlFor="expirationDate">Expiration date</label><br />
                        <input type="text" name="expirationDate" id="expirationDate" />
                    </div>
                    <div className="cvv-wrapper">
                        <label htmlFor="cvv">CVV</label><br />
                        <input type="text" name="cvv" id="cvv" />
                    </div>
                </div>
            </form>
            <div className="divider"></div>
            <div className="payment--total-wrapper">
                <h4>Total</h4>
                <h4>${totalAmount.toFixed(2)}</h4>
            </div>
            <button id='checkout'>
                <h4>${totalAmount.toFixed(2)}</h4>
                <h3>Checkout</h3>
                <img src={forwardArrow} alt="" height='25px'/>
            </button>
        </div>
    )
}

export default Payment