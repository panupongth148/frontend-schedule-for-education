import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://34.229.86.135:3001/',
})

// instance.interceptors.request.use(
//     function (config) {
//         const token = localStorage.getItem('token')
//         if (token) {
//             config.headers['Authorization'] = `Bearer ${token}`
//         }
//         return config;
//     },
//     function (error) {
//         return Promise.reject(error);
//     }
// );

export default instance
