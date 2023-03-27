import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
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

   const handelAddToCart = (product) =>{
   const newCart = [...cart, product]
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
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;