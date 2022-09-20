import React from 'react'
import './searchResult.css'
import { MdFavoriteBorder, MdStarRate } from 'react-icons/md'

function searchResult({img, location, title, description, star, price, total,}) {
  return (
    <div className='searchresult'>
      <img src={img} alt='' />
      <MdFavoriteBorder size='20'className='searchResult-heart' />
      <div className='searchResult-info'>
      <div className='searchResult-infoTop'>
        <p>{location}</p>
        <h3>{title}</h3>
        <p>____</p>
        <p>{description}</p>
      </div>

      <div className='searchResult-infoBottom'>
        <div className='searchResult-stars'>
          <p>
          <MdStarRate size='20'className='searchResult-star' />
            <strong>{star}</strong>
          </p>
        </div>

      <div className='searchResult-price'>
          <p>{price}</p>
          <p>{total}</p>
      </div>    
      </div>
      </div>
    </div>
  )
}

export default searchResult