import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'
const Header = () => {
    return (
        <div className='Header'>
         <img src={logo} alt="" />
         <div className='navbar'>
            <a href="/order">Order</a>
            <a href="/order review">Order Review</a>
            <a href="/Manage Inventory">Manage Inventory</a>
            <a href="/login">Login</a>
         </div>
        </div>
    );
};

export default Header;