import React from 'react';
import './Product.css'
const Product = (props) => {
    const {img, name, price, ratings, seller} = props.product
    return (
        <div className='product'>
           <img src={img} alt="" />
           <div className='product-info'>
           <h6 className='product-name'>{name}</h6> 
           <p>price: ${price}</p>
           <p>Manufacturer: {seller}</p>
           <p>Rating :{ratings} star</p>
           </div>
           <button className='cart-btn'>Add t cart</button>
        </div>
    );
};

export default Product;