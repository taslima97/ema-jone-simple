import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import "./Review.css"
const Review = ({product, handelReviewCart}) => {
    const {id, name, img, quantity, price} = product
    return (
        <div className='review-item'>
            <img src={img} alt="" />
            <div className='review-info'>
                <h5>Product: {name}</h5>
                <p>Price: <span className='text-orange'>${price}</span></p>
                <p>Quantity: <span className='text-orange'>${quantity}</span></p>
            </div>
            <button onClick={()=>handelReviewCart(id)} className='btn-delete'><FontAwesomeIcon className='delete-icon' icon={faTrashAlt} /></button>
        </div>
    );
};

export default Review;