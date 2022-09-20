import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className='footer'>
       <p>
        &copy;
        {new Date().getFullYear()} 
        Airbnb clone! No rights Reserved
      </p>

      <p>Privay - Terms - Sitemap - Company details</p>
    </div>
  )
}

export default Footer