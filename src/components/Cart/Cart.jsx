import React from 'react';
import './Cart.css'
const Cart = ({cart}) => {


    let totalPrice = 0;
    let totalShipping = 0;
    let quantity = 0
    for (const product of cart) {
        product.quantity=product.quantity||1
      totalPrice = totalPrice+product.price * product.quantity; 
      totalShipping = totalShipping + product.shipping; 
      quantity = quantity + product.quantity
    }

    const tax = totalPrice*7/100;
const GrandTotal = totalPrice + totalShipping + tax;

    return (
        <div className='cart'>
            <h3>order summary</h3>
                <p>selected item:{quantity}</p>
                <p>price: ${totalPrice}</p>
                <p>Total Shipping Charge: ${totalShipping}</p>
                <p>tax: ${tax.toFixed(2)}</p>
                <h6>Grand total:$ {GrandTotal.toFixed(2)}</h6>
        </div>
    );
};

export default Cart;