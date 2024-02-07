import { FormGroup, TextField, Typography } from '@mui/material'
import React from 'react'

const Registration = () => {
  return (
    <div>
    
        <Typography variant='h4'>HELLO</Typography>
        <TextField label="username"variant='outlined'></TextField> 
        <br /><br />
        <input type="date" placeholder='date of birth' />
        
        </div>
  )
}

export default Registration