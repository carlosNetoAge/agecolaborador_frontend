import Echo from 'laravel-echo';
import Pusher from 'pusher-js';
import Cookie from "js-cookie";

// Adiciona o Pusher ao objeto window
window.Pusher = Pusher;


window.Echo = new Echo({
    broadcaster: 'pusher',
    key: 'ec640c0984aafe2e4aa4',
    // key: '80d6d3165b9d9ad11b13',
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