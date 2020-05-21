var axios = require('axios');

var axiosInstance = axios.create({
    headers: {
        common: { "X-Requested-With": 'XMLHttpRequest' }
    }
});

// axiosInstance.interceptors.response.use(null, function (err) {
//     if (err.status === 401) {
//         window.location.replace("/login");
//     }

//     return Promise.reject(err);
// });

module.exports = axiosInstance;