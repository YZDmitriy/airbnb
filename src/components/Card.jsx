import React from 'react';

function Card(props) {
  return (
    <div className='card'>
      <img
        className='card--image'
        src='./images/katie-zaferes.png'
        alt='cardphoto'
      />
      <div className='card--stars'>
        <img className='card--star' src='./images/star.png' alt='stars' />
        <span>5.0</span>
        <span className='grey--rei'>(6) </span>
        <span className='grey--rei'>USA</span>
      </div>
        <p>Life lessons with Katie Zaferes</p>
        <p><span className='bold'>From $136</span> / person</p>
    </div>
  );
}

export default Card;
