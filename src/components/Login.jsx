import { TextField, Typography } from '@mui/material'
import React from 'react'

function Login() {
  return (
    <div><h2>LOGIN</h2><br></br>
        <input type="name" placeholder='name' />
        <br /><br />
        <input type="email" placeholder='email' />
        <br /><br />
        <input type="password" placeholder='password' />
        <br /><br />
        <button><b>SUBMIT</b></button>
        <br /><br /><br /><br />
        <Typography variant='h3'>WELCOME TO REAL WORLD</Typography>
        <br />
        <h5>give some creamy details</h5>
        <br />
        <TextField id="outline" label="pet name" variant="filled" />
        <br /><br />
        <TextField id="filled" label="besty name" variant="filled" />
        <br /><br />
        <TextField id="standard" label="nick name" variant="filled" />
    </div>
  )
}

export default Login