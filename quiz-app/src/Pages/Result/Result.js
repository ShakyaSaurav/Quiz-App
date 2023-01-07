import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@material-ui/core';
import './Result.css'

const Result = ({name,score}) => {
  const history= useNavigate();

  useEffect(()=>{
    if(!name){
      history.push('/');
    }
  },[name,history]);
  return (
    <div className='result'>
      <span className='title'> Final Score : {score}</span>
      <Button
      variant='contained'
      color='secondary'
      size='large'
      style={{alignSeld:'center', marginTop:20}}
      href='/'
      >
        Go to homePage</Button></div>
  )
}

export default Result