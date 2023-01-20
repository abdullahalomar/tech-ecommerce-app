import axios from "axios";

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer x2rmpvG4pRIOGFhLRxFBYaDQH-uM8HfOlBlOJ2RY6n80vJRwkTnBHc8aXJMuFCqFWmpeOQMWj0oXLm-CUwLSv0lJD7XwNhcGc5D_R6xOdLZMrzmZHagulBLiU5qPY3Yx'
    }
});

// https://technology.free.beeceptor.com/

// Bearer x2rmpvG4pRIOGFhLRxFBYaDQH-uM8HfOlBlOJ2RY6n80vJRwkTnBHc8aXJMuFCqFWmpeOQMWj0oXLm-CUwLSv0lJD7XwNhcGc5D_R6xOdLZMrzmZHagulBLiU5qPY3Yx