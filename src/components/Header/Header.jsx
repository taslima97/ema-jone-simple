import React from 'react';
import logo from '../../images/Logo.svg'
import {Link} from 'react-router-dom'
import './Header.css'
const Header = () => {
    return (
        <div className='Header'>
         <img src={logo} alt="" />
         <div className='navbar'>
            <Link to="/">Shop</Link>
            <Link to="/order">Order</Link>
            <Link to="/Inventory">Inventory</Link>
            <Link to="/login">Login</Link>
            
         </div>
        </div>
    );
};

export default Header;