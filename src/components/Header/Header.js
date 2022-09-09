import React from 'react'
import './Header.css';
import cart from '../assets/images/cart.svg';
import user from '../assets/images/user.svg';

function Header() {
  return (
    <div className='header'>
      <h2>LOGO</h2>
      <div>
        <img src={user} />
        <img src={cart} />
      </div>
    </div>
  )
}

export default Header