import React from 'react'
import './Card.css';

function Card(props) {
  return (
    <div className='card' id='head2'>
      <img src={props.imageUrl} />
      <h3>{props.title}</h3>
      <h6>{props.text}</h6>
      <p>{props.price}</p>
    </div>
  )
}
export default Card