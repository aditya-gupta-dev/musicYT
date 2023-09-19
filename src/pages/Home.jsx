import React, { useState } from 'react';
import { Search } from '@mui/icons-material';
import { Button, Typography, Toolbar, AppBar, Paper, TextField, Fab, Stack } from '@mui/material';
import './Home.css';
import Video from '../components/Video';


function Home() {

  return (
    <>
        <AppBar className='navbar'>
            <Toolbar>
                <Typography variant="h5" className='title'>
                MusicYT
                </Typography>
                <Button color="inherit">Starred</Button>
                <Button color="inherit">Settings</Button>
                <Button color="inherit">About</Button>
            </Toolbar>
        </AppBar>

        <Stack marginTop={10} marginBottom={12} alignItems='center'>
            
        </Stack>

        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
            <div className='inputGroup'>
                <TextField variant='filled' label='enter your query' fullWidth/>
                <Fab color='primary' className='floatingButton'>
                    <Search/>
                </Fab>
            </div>
        </Paper>
    </>
  );
}

export default Home;
