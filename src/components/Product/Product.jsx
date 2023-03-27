import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
const Product = (props) => {
    const {img, name, price, ratings, seller} = props.product;
    const handelAddToCart = props.handelAddToCart
    return (
        <div className='product'>
           <img src={img} alt="" />
           <div className='product-info'>
           <h6 className='product-name'>{name}</h6> 
           <p>price: ${price}</p>
           <p>Manufacturer: {seller}</p>
           <p>Rating :{ratings} star</p>
           </div>
           <button onClick={()=>handelAddToCart(props.product)} 
           className='cart-btn'>
            Add t cart <FontAwesomeIcon icon={faShoppingCart} />
           </button>
        </div>
    );
};

export default Product;