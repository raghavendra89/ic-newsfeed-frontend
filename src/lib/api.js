import axios from '@/lib/axios.js';

const api = {
    get: (url) => {
        return axios.get('/api/' + url)
            .then(response => response.data)
            .catch(error => {
                if (error.response.status == 401 && window.location.pathname == '/my-feed') {
                    window.location.replace('/');
                }
            });
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
    },
    register: (formData) => {
        return axios.get('/sanctum/csrf-cookie')
            .then(response => {
                return axios.post('/api/register', formData)
                        .then(response => response.data)
                        .catch(error => error.response);
            });
    },
    login: (formData) => {
        return axios.get('/sanctum/csrf-cookie')
            .then(response => {
                return axios.post('/api/login', formData)
                        .then(response => response.data)
                        .catch(error => error.response);
            });
    }
}

export default api;