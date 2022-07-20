import * as React from 'react'
import {
  Grid,
  Paper,
  Box
} from '@mui/material'
import ProfileTab from './tabs';
import { useSelector } from 'react-redux';

const ProfilePage = () => {
  const user = useSelector(state => state.auth.user);
  return (
    <Grid container sx={{ padding: '20px' }} spacing={2}>
      <Grid item md={3}>
        <Paper sx={{minHeight: "450px", padding: "20px", boxSizing: "border-box"}}>
          <Box sx={{padding: "10px 0px"}}>
            <span style={{fontSize: "20px", lineHeight: "50px"}}> Name: {user.name}</span>
          </Box>
          <Box sx={{padding: "10px 0px"}}>
            <span style={{fontSize: "20px", lineHeight: "50px"}}> Email: {user.email}</span>
          </Box>
          <Box sx={{padding: "10px 0px"}}>
            <span style={{fontSize: "20px", lineHeight: "50px"}}> Subscript: {user.subscription ? "Yes" : "No"}</span>
          </Box>
        </Paper>
      </Grid>
      <Grid item md={9}>
        <Paper sx={{ padding: '10px', minHeight: '450px' }}>
          <ProfileTab></ProfileTab>
        </Paper>
      </Grid>
    </Grid>
  )
}

export default ProfilePage
