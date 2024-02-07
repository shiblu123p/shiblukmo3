import { Button } from '@mui/base'
import { Typography } from '@mui/material'
import React, { useState } from 'react'

export const UseE = () => {
    var[hname,setFname]=useState()

    const changeHname=()=>{

        setFname("Home")
    }
    const changeGname=()=>{

        setFname("Contact")
    }
    const changeCname=()=>{
        setFname("Gallary")

    }

  return (
    <div style={{paddingTop:"80px"}}>
        <Button variant='contained'color='primary'onClick={changeHname}>Home</Button>&nbsp;
        <Button variant='contained'color='secondary'onClick={changeGname}>Gallery</Button>&nbsp;
        <Button variant='contained'color='error'onClick={changeCname}>Contact</Button>
        <Typography>WELCOME to{hname}</Typography>
    </div>
  )
}
