import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import Review from '../Review/Review';
import "./Order.css"
import { removeFromDb } from '../../utilities/fakedb';
const Order = () => {
    const savedCart = useLoaderData()
    const[cart, setCart] =useState(savedCart)

    const handelReviewCart = (id) =>{
      const remaining = cart.filter(product => product.id !== id)
      setCart(remaining)
      removeFromDb(id)
    }
    return (
        <div className='shop-container'>
            <div className='review-container'>
            {
                cart.map(product=><Review 
                    key={product.id}
                    product= {product}
                    handelReviewCart={handelReviewCart}>
                    </Review>)
               }
            </div>
            <div>
                <div className='summary-cart'>
                 <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Order;