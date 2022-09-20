import React, { useState } from 'react'
import { Button } from 'antd'
import './Banner.css'
import Search from './Search';
import { useNavigate } from 'react-router-dom'


function Banner() {

  let history = useNavigate();


  const [showSearch, setShowSearch] = useState(false);
  return (
    <div className='banner'>
      <div className='banner-search'>
        {showSearch && <Search />}
        <Button onClick={() => setShowSearch(!showSearch)} className='banner-searchbutton'
          variant='outlined'>{showSearch? "Hide": "Search Dates"}
        </Button>
      </div>
      <div className='banner-info'>
        <h1>Get out and stretch your imagination</h1>
        <h5>
          Plan a different kind of getaway to uncover the hidden gems near you.
        </h5>
        <Button onClick={() => history('./search')} variant='outlined'>Explore Nearby</Button>
      </div>
    </div>
  )
}

export default Banner