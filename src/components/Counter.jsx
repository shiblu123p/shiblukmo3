import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

 const Counter = () => {
    var [count,setCount] = useState (0)

    const incBtn =()=> {
        console.log("inc clicked")
        setCount(count+1)
    }
    const dicBtn=()=> {
        console.log("dec clicked")
        setCount(count-1)
    }
  return (
    <div style={{passingTop:"80px"}}>
        <Typography>Counter Value :{count}</Typography>
        <Button variant='contained'color='success' onClick={incBtn}>+</Button>
        <Button variant='contained'color='error'onClick={dicBtn}>-</Button>
    </div>
  )
}
export default Counter
