import VueAxios from 'axios';
import Cookie from 'js-cookie';

export const AXIOS = VueAxios.create({
    // baseURL: "https://v2.ageportal.agetelecom.com.br/portal/",
    baseURL: "http://localhost:8000/portal/",
    headers: {
        Authorization: "Bearer "+Cookie.get("token"),
    }
});