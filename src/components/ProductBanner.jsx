import React from 'react'
import '../styles/ProductBanner.css'
import productBannerImg from '../assets/images/first.png'
import starIcon from '../assets/icons/star-icon.svg'
import heartOutline from '../assets/icons/heart-outline.png'
import heartFilled from '../assets/icons/heart-filled.png'

function ProductBanner() {

    const [productCounter, setProductCounter] = React.useState(1)
    const [isFilled, setIsFilled] = React.useState(false)

    function DecreaseCounter() {
        if (productCounter !== 0) {
            setProductCounter(prevCount => productCounter - 1)
        }
    }

    function IncreaseCounter() {
        setProductCounter(prevCount => productCounter + 1)
    }

    function ToggleFavorite() {
        setIsFilled(prevState => !prevState)
    }

    return (
        <div className="product-banner">
            <div className="banner-img-wrapper"><img src={productBannerImg} alt="" /></div>
            <div className="product-banner--description">
                <h3 className="product-banner--title">
                    Love Math
                </h3>
                <div className="product-review-wrapper">
                    <img src={starIcon} alt="starIcon" />
                    <img src={starIcon} alt="starIcon" />
                    <img src={starIcon} alt="starIcon" />
                    <img src={starIcon} alt="starIcon" />
                    <img src={starIcon} alt="starIcon" />
                    <span>(2000+ Reviews)</span>
                </div>
                <h2 className='product-description'>Convenient Always!</h2>
                <p className='product-price'>Price $150.95</p>
                {/* <span>Color</span>
            <ul className='color-option'>
                <li className='f-option'></li>
                <li className='s-option'></li>
                <li className='t-option'></li>
                <li className='fourth-option'></li>
            </ul> */}
                <div className="product-counter-wrapper">
                    <button onClick={DecreaseCounter}>-</button>
                    <p>{productCounter}</p>
                    <button onClick={IncreaseCounter}>+</button>
                </div>
                <div className="product-banner--btns-wrapper">
                    <button id='add-to-fav-btn' onClick={ToggleFavorite}><img src={isFilled ? heartFilled : heartOutline} alt="" height="25px" /></button>
                    <button id='add-to-cart-btn'>Add to cart</button>
                    <button id='buy-now-btn'>Buy now</button>
                </div>
            </div>
        </div>
    )
}

export default ProductBanner