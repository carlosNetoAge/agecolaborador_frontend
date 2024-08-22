import Echo from 'laravel-echo';
import Pusher from 'pusher-js';
import Cookie from "js-cookie";

// Adiciona o Pusher ao objeto window
window.Pusher = Pusher;


// Configura o Echo
window.Echo = new Echo({
    broadcaster: 'pusher',
    key: 'local',
    wsHost: '127.0.0.1',
    wsPort: 6001,
    cluster: 'mt1',
    forceTLS: false,
    disableStats: true,
    authEndpoint: 'http://127.0.0.1:8000/api/broadcasting/auth',
    auth: {
        headers: {
            Authorization: 'Bearer ' + Cookie.get('token'),
        },
    },
});

export default window.Echo;