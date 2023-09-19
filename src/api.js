import axios from "axios";

export async function getVideos(query) {
    const response = await axios.get('https://onlyaudioapi.hypernova101.repl.co/video', {
        headers: {
            'q': query
    }
    });
    if(response.status === 200) {
        return response.data;
    } else {
        return []
    }
}