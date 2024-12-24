import Axios from 'axios';

const axios = Axios.create({
    baseURL: import.meta.env.VITE_LARAVEL_BACKEND_URL,
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
    },
    withCredentials: true,
    withXSRFToken: true
});

export default axios;