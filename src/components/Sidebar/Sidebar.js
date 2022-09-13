import React from 'react'
import './Sidebar.css';

function Sidebar() {
  return (
    <div className='sidebar'>
      <ul>
        <a href='#head1'>О нас</a>
        <a href='#head2'>Наши проекты</a>
        <a href='#head3'>Контакты</a>
      </ul>
    </div>
  )
}

export default Sidebar