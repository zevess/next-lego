import axios from "axios";

export const api = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_API_URL}/api`,
    headers:{
        'Content-Type': 'application/json'
    }
})

export const rebrickableApi = axios.create({
    baseURL: 'https://rebrickable.com/api/v3/lego/sets',
    headers:{
        'Authorization': `${process.env.NEXT_PUBLIC_REBRICKABLE_KEY}`,
        'Content-Type': 'application/json'   
    }
})