import { getMvListRequest } from "../apis/requests/api";

export const state = () => ({
    videoList: [],
    isMute: true
})

export const actions = {
    getMvList(context, payload) {
        return getMvListRequest(payload.limit, payload.offset).then(result => {
            context.commit('getMvList', result.data);
        })
    },
    noMute(context) {
        context.commit('noMute');
    },
    mute(context) {
        context.commit('mute');
    }
}

export const mutations = {
    getMvList(state, payload) {
        state.videoList.push(...payload);
    },
    noMute(state) {
        state.isMute = false;
    },
    mute(state) {
        state.isMute = true;
    }
}