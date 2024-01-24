import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import LogoutButton from './LogoutButton';
import Profile from './Profile';

function Profile1() {
  return (
    <div>
      <AppBar position="static" sx={{backgroundColor:"#0F0F0F"}}>
        <Toolbar>
          
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            Movies catalog website
          </Typography>
       
          <Box sx={{ flexGrow: 1 }} />
         
<a href="/profile1"><Button variant="contained" >
              Profile
            </Button> </a>
    
        </Toolbar>
      </AppBar>
      <Profile/>
      <LogoutButton/>
     

    </div>
  )
}

export default Profile1