import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { BASE_URL, TIME_OUT, errorHandle } from './config';

interface ResponseData<T> {
    code: number;
    data: T;
    msg: string;
    [key: string]: any;
}

/**
 * 创建axios实例
 */
const axiosInstance: AxiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: TIME_OUT,
});

/**
 * 响应拦截处理
 */
axiosInstance.interceptors.response.use(
    (res: AxiosResponse) => {
        if (res.status === 200) {
            // const code = res.data.code;
            // if (code === 200) {
            return Promise.resolve(res.data);
            // }
        } else {
            alert(res.data.msg)
            return Promise.reject(res.data);
        }
    },
    (error: any) => {
        if (error.response.status === 500) {
            alert("服务器错误")
        }

        if (error && error.response) {
            errorHandle(error.response.status);
            return Promise.reject(error.response);
        }
        console.log("网络请求失败，请检查网络");
        alert("网络请求失败，请检查网络")
        return Promise.reject(error);
    }
);

const ajaxGet = <T>(url: string, params?: any): Promise<ResponseData<T>> => {
    return axiosInstance.get(url, { params });
}

const ajaxPost = <T>(url: string, params?: any): Promise<ResponseData<T>> => {
    return axiosInstance.post(url, params);
}

export {
    ajaxPost,
    ajaxGet,
};

export default axiosInstance;