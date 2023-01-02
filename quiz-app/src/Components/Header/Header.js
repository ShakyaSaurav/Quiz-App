import React from 'react';
import {link} from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <BrowserRouter>
    <div className='header'>
      <link to='/' className='title'>
      Intuituve Quiz Hub
      </link>  
      <hr className='divider'/>
    </div>
    </BrowserRouter>
  )
}

export default Header