import React from 'react'
import { Link } from 'react-router-dom';
import'./Header.css';

const Header = () => {
  return (
    <div className='header'>
      <Link to='/' className='title' >
      Flag Quiz Contest
      </Link>
      <hr className='divider'></hr>
    </div>
  )
}

export default Header