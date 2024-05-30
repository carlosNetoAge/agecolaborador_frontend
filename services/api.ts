import VueAxios from 'axios';
import Cookie from 'js-cookie';

export const AXIOS = VueAxios.create({
    baseURL: "http://localhost:8000/portal/",
    headers: {
        Authorization: "Bearer "+Cookie.get("token"),
    }
});