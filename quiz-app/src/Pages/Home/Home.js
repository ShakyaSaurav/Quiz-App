import React from 'react'
import "./Home.css"
import {Button, colors, MenuItem, TextField} from '@material-ui/core';
import Categories from '../../Data/Categories';
import { useState } from 'react';

const Home = ({name,setName}) => {
  const [category, setCategory] = useState('');
  const [difficulty, setdifficulty] = useState('');
 
  return (
    <div className='content'>
      <div className='settings'>
        <span style={{fontSize:30}}>Quiz Setting</span>
        
        <div className='settings_select'>
          <TextField style={{marginBottom:25}} 
          label='Enter Your Name' 
          variant='outlined'
          onChange={(e)=> setName(e.target.value)}
          
          />
          <TextField select
          label='Select Category' 
          variant='outlined'
          style={{marginBottom:30}}
          onChange={(e)=>setCategory(e.target.value)}
          value={category}
          >
            {Categories.map((cat)=>(
              <MenuItem key={cat.category} value={cat.value}>
                {cat.category}
              </MenuItem>
            ))}
              
            </TextField>
            <TextField select
          label='Select Difficulty' 
          variant='outlined'
          style={{marginBottom:30}}
          onChange={(e)=> setdifficulty(e.target.value)}
          value={difficulty}
          >
              <MenuItem key="Easy" value='easy'>
                Easy
              </MenuItem>
              <MenuItem key="Medium" value='medium'>
                Medium
              </MenuItem>
              <MenuItem key="Hard" value='hard'>
                Hard
              </MenuItem>
            </TextField>
            <Button variant='contained' color='primary' size='large'>
              Start Quiz
            </Button>

        </div>
      
      
    </div>
      <img src='./quiz.png' className='banner' alt='quiz_img'></img>
    </div>
  )
}

export default Home