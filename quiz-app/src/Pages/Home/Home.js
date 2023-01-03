import React from 'react'
import "./Home.css"
import {TextField} from '@material-ui/core';
const Home = () => {
  return (
    <div className='content'>
      <div className='settings'>
        <span style={{fontSize:30}}>Quiz Setting</span>
        
        <div className='settings_select'>
          <TextField style={{marginBottom:25}} 
          label='Enter Your Name' 
          variant='outlined'/>
        </div>
      
      
    </div>
      <img src='./quiz.png' className='banner' alt='quiz_img'></img>
    </div>
  )
}

export default Home