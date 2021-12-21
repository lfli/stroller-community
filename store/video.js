import { getMvListRequest } from "../apis/requests/api";

export const state = () => ({
    videoList: []
})

export const actions = {
    getMvList(context) {
        return getMvListRequest(40).then(result => {
            context.commit('getMvList', result.data);
        })
    }
}

export const mutations = {
    getMvList(state, payload) {
        state.videoList.push(...payload);
    }
}