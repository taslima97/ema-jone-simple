import React from 'react';
import './Cart.css'
const Cart = ({cart}) => {


    let totalPrice = 0;
    let totalShipping = 0;
    for (const product of cart) {
      totalPrice = totalPrice+product.price; 
      totalShipping = totalShipping + product.shipping; 
    }

    const tax = totalPrice*7/100;
const GrandTotal = totalPrice + totalShipping + tax;

    return (
        <div className='cart'>
            <h3>order summary</h3>
                <p>selected item:{cart.length}</p>
                <p>price: ${totalPrice}</p>
                <p>Total Shipping Charge: ${totalShipping}</p>
                <p>tax: ${tax.toFixed(2)}</p>
                <h6>Grand total:$ {GrandTotal.toFixed(2)}</h6>
        </div>
    );
};

export default Cart;