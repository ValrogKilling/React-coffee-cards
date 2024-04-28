import React from 'react'
import PropTypes from "prop-types";

import "./card.css";

function Card({title, imageSource, text}) {
  return (
    <div className='card text-center bg-dark'>
        <div className='overflow'>
        <img src={imageSource} alt='a wallpaper' className='card-img-top'></img>
        </div>
        <div className='card-body text-light'>
            <h4 className='card-title'>{title}</h4>
            <p className='card-text text-secondary'>
              {
                text ? text : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
              }
            </p>
            <a href='https://www.nescafe.com/in/coffee-types' target='_blank' className='btn btn-outline-secondary'>
                Ir a la página de Nescafé
            </a>
        </div>
    
    </div>
  )
}
Card.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string,
  imageSource: PropTypes.string,
  text: PropTypes.string
}


export default Card;