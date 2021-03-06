import axios from 'axios';

export async function searchVideos(term) {
    const response = await axios.get('https://www.googleapis.com/youtube/v3/search',{
        params:{
            part: 'snippet',
            type: 'video',
            q: term,
            maxResults: 50,
            key: process.env.API_KEY
        }
    });
    return response.data.items;
}
