import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

export const StateBasis = () => {
    // var fname = 'shiblu'
    var [fname,setFname] = useState("shiblu")
    const changeName = ()=>{
        console.log('clicked')
        setFname('home')
    }
  return (
    <div style={{paddingTop:"80px"}}>
        <Typography variant='h4'>welcome {fname}</Typography>
        <Button variant= "contained" onClick={changeName}>change</Button>
        

    </div>
  )
}
