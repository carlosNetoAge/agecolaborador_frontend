import Echo from 'laravel-echo';
import Pusher from 'pusher-js';
import Cookie from "js-cookie";

// Adiciona o Pusher ao objeto window
window.Pusher = Pusher;


window.Echo = new Echo({
    broadcaster: 'pusher',
    // key: 'ec640c0984aafe2e4aa4',
    key: '4ee36fedb81a01084111',
    cluster: 'sa1',
    forceTLS: true,
    authEndpoint: 'https://v2.ageportal.agetelecom.com.br/broadcasting/auth',
    // authEndpoint: 'http://localhost:8000/broadcasting/auth',
    auth: {
        headers: {
            'X-Requested-With': 'XMLHttpRequest',
            Authorization: 'Bearer ' + Cookie.get('token')
        }
    }

});
export default window.Echo;