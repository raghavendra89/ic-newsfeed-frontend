import axios from '@/lib/axios.js';

const api = {
    get: (url) => {
        return axios.get('/api/' + url)
            .then(response => response.data);
    },
    post: (url, params) => {
        return axios.post('/api/' + url, params)
            .then(response => response.data)
            .catch(error => {
                if (error.response) {
                    console.log(error.response);
                }

                throw(error);
            });
    }
}

export default api;