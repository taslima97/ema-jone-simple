import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './shop.css'
const Shop = () => {
   const[products, setproducts] = useState([])
const [cart, setCart] = useState([])
   useEffect(()=>{
    fetch('products.json')
    .then(res=>res.json())
    .then(data=>setproducts(data))
   },[])

   const handelAddToCart = (props) =>{
   const newCart = [...cart, props]
   setCart(newCart)
   }
    return (
        <div className='shop-container'>
            <div className="products-container">
               {
                products.map(product=><Product 
                    product={product} 
                    key={product.id}
                    handelAddToCart= {handelAddToCart}
                ></Product>)
               }
            </div>
            <div className="summary-cart">
                <h3>order summary</h3>
                <p>selected item:{cart.length}</p>
            </div>
        </div>
    );
};

export default Shop;