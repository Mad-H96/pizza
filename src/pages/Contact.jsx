import React from 'react'
import './contact.css'
import conImg from '../assets/contactImg.jpg'
import Fotter from '../components/Fotter'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const Contact = () => {
  
  return (
    <>
  <div class="row">
    <div class="col">

      <div className="mainImg">
      <img src={conImg} alt="img" className='mainimg' />

      </div>
    </div>
    <div class="col">
     <div className="contact">
      <h1>Contact Us</h1>
      <br />
      <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '70%' },
      }}
      noValidate
      autoComplete="off"
    >
   
      <TextField id="filled-basic" label="First Name" variant="filled" className='txtField' /><br />
      <TextField id="filled-basic" label="Last Name" variant="filled" className='txtField' /><br />
      <TextField id="filled-basic" label="Email" variant="filled" className='txtField' /><br />
      <TextField
          id="filled-multiline-flexible"
          label="Your Message"
          multiline
          maxRows={4}
          variant="filled"
        />
    </Box>
    <br />
      <button className='btn btn-warning send'>Send</button>
     </div>
    </div>
  </div>
 

  <Fotter/>
    </>
  )
}

export default Contact