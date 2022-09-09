import React from 'react'
import './Footer.css';
import facebook from '../assets/images/facebook.svg';
import instagram from '../assets/images/instagram.svg';
import whatsapp from '../assets/images/whatsapp.svg';



function Footer() {
  return (
    <div className='footer'>
      <h2>LOGO</h2>
      <p>Copyright © 2022 Apple Inc. All rights reserved.</p>
      <div className='messenger-links'>
        <img src={whatsapp} />
        <img src={facebook} />
        <img src={instagram} />
      </div>
    </div>
  )
}

export default Footer