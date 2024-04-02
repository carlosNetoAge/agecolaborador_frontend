import VueAxios from 'axios'
import Cookie from "js-cookie";

export const AXIOS = VueAxios.create({
    baseURL: `https://v2.ageportal.agetelecom.com.br/portal/`,
    // baseURL: `http://localhost:8000/portal/`,
    //baseURL: `http://v1.portal.tote.local/api`,
    headers: {
        'Authorization': 'Bearer '+Cookie.get('token'),
    }

})