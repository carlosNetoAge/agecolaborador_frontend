import VueAxios from 'axios';
import Cookie from 'js-cookie';

export const AXIOS = VueAxios.create({
    baseURL: "https://v2.ageportal.agetelecom.com.br/portal/",
    headers: {
        Authorization: "Bearer "+Cookie.get("token"),
    }
});