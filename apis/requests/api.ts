import { ajaxPost, ajaxGet } from "../ajax";
import { POST_LOGIN } from "../url";

/**
 * 登录
 * @param name 
 * @param password 
 * @returns 
 */
const postLoginRequest = (name: string, password: string) => {
    return ajaxPost<any>(POST_LOGIN, {
        name,
        password
    })
}

export {
    postLoginRequest
}