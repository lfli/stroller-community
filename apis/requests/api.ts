import { ajaxPost, ajaxGet } from "../ajax";
import { GET_MV_ALL, GET_MV_URL, POST_LOGIN } from "../url";

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


const getMvListRequest = (limit: number, offset = 0) => {
    return ajaxGet(GET_MV_ALL, { limit, offset, order: "最热", area: "内地" });
}

const getMvUrlRequest = (id: number) => {
    return ajaxGet<{url: string}>(GET_MV_URL, { id });
}

export {
    postLoginRequest,
    getMvListRequest,
    getMvUrlRequest
}