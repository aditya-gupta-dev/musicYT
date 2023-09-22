import { Typography } from "@mui/material";
import { titleSlice } from '../utils/utils';
import { Card, CardMedia, CardContent, CardActions, Button } from '@mui/material';
import { useState } from "react";

export default function SavedVideo({ video }) {

    const [removedText, setRemovedText] = useState("Remove");

    const onRemoveButtonClick = () => {
        if(removedText !== "Removed") {
            localStorage.removeItem(video.id);
            setRemovedText("Removed");
        }
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
                    <Button size="medium" variant='outlined' onClick={onRemoveButtonClick}>{removedText}</Button>
                </CardActions>
            </Card>
        </>
    );
}
