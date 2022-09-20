import React from 'react'
import './Header.css';
import { GrFormSearch } from 'react-icons/gr'
import { MdLanguage, MdOutlineExpandMore } from 'react-icons/md'
import { Avatar } from 'antd'
import 'antd/dist/antd.css';
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='header'>
      <Link to='/' >
<img className='header-icon'
src='data:image/png;base64,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' 
alt='' />
      </Link>
      
    <div className='header-center'>
      <input type='text' />
      <GrFormSearch />
    </div>

    <div className='header-right'>
      <p>Become a host</p>
      <MdLanguage size='20'/>
      <MdOutlineExpandMore size='20'/>
      <Avatar icon='user'/>  
    </div>
    </div>
  )
}

export default Header