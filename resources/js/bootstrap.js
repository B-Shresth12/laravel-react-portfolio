import axios from 'axios';
window.axios = axios;

window.axios.defaults.headers.common['X-Inertia'] = true;

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
