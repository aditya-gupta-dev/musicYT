import React, { useEffect, useRef, useState } from 'react';
import { Search } from '@mui/icons-material';
import { Button, Typography, Toolbar, AppBar, Paper, TextField, Fab, Stack, CircularProgress } from '@mui/material';
import './Home.css';
import Video from '../components/Video';
import { getVideos } from '../api';
import VideoList from '../components/VideoList';

function Home() {

    const [videos, setVideos] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [query, setQuery] = useState("");

    const onSearchButtonClick = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        
        const videos = await getVideos(query);

        setVideos(videos);
        setIsLoading(false);
    }   

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

        <Stack marginTop={10} marginBottom={12} alignItems="center" justifyContent="center">
            { isLoading ? <CircularProgress thickness={5} /> : <VideoList videos={videos} />}
        </Stack>

        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
            <div className='inputGroup'>
                <TextField variant='filled' label='enter your query' value={query} onChange={(e) => setQuery(e.target.value)} fullWidth/>
                <Fab color='primary' onClick={onSearchButtonClick}>
                    <Search/>
                </Fab>
            </div>
        </Paper>
    </>
  );
}

export default Home;
