import { Typography } from "@mui/material";
import { titleSlice } from '../utils/utils';
import { Card, CardMedia, CardContent, CardActions, Button } from '@mui/material';

export default function SavedVideo({ video, videos, setVideos }) {

    const onRemoveButtonClick = () => {

    }

    return (
        <>
            <Card sx={{ maxWidth: 345, minWidth: 345, marginTop: 4 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={video.thumbnailUrl}
                    title="thumbnail"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {titleSlice(video.title)}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="medium" variant='outlined'>Listen</Button>
                    <Button size="medium" variant='outlined'>
                        <a href={`https://youtu.be/${video.id}`} style={{ textDecoration: 'none' }}>Watch</a>
                    </Button>
                    <Button size="medium" variant='outlined' onClick={onRemoveButtonClick}>Remove</Button>
                </CardActions>
            </Card>
        </>
    );
}
