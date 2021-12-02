import axios from 'axios';
import {
    BASE_URL,
    TIMEOUT
} from './config';

export default function request(options: any) {
    return new Promise((resolve: any, reject: any) => {
        const instance = axios.create({
            baseURL: BASE_URL,
            timeout: TIMEOUT
        });

        instance.interceptors.request.use((config: any) => {
            return config;
        }, (err: any) => {
            return err;
        });

        instance.interceptors.response.use((res: any) => {
            return res.data;
        }, (err: any) => {
            console.log('来到了response拦截failure中');
            return err;
        });

        instance(options).then((res: any) => {
            resolve(res);
        }, (err: any) => {
            reject(err);
        });
    });
}