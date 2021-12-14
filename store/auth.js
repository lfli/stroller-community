import { postLoginRequest } from "../apis/requests/api";

export const state = () => ({
    userName: ''
})

export const actions = {
    login(context, payload) {
        postLoginRequest(payload.username, payload.password).then(result => {
            context.commit('login', result.data.realname);
        })
    }
}

export const mutations = {
    login(state, payload) {
        state.userName = payload
    }
}