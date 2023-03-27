import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './shop.css'
const Shop = () => {
   const[products, setproducts] = useState([])

   useEffect(()=>{
    fetch('products.json')
    .then(res=>res.json())
    .then(data=>setproducts(data))
   },[])
    return (
        <div className='shop-container'>
            <div className="products-container">
               {
                products.map(product=><Product product={product} key={product.id}></Product>)
               }
            </div>
            <div className="summary-cart">
                <h3>order summary</h3>
            </div>
        </div>
    );
};

export default Shop;