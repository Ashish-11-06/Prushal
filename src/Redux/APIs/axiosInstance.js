
import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://api.prushal.com/api', // Ensure this base URL is correct
    headers: {
        'Content-Type': 'application/json',
    },
});

export default axiosInstance;
