import { Typography } from "@mui/material";

export default function SavedVideo({ video }) {
    console.log("Component rendered");
    return (
        <>
            <Typography>
                { video.title }
            </Typography>
        </>
    );
}
