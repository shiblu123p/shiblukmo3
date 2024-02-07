import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'

export const Appbar = () => {
  return (
    <div>
        <AppBar>
            <Toolbar>
              <Typography>First App</Typography>  
              <Button variant="contained" color='error'>login</Button>&nbsp;
              <Button variant='contained' color='success'>sign</Button>  
                       
            </Toolbar>
        </AppBar>
    </div>
  )
}
