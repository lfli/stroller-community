export const state = () => ({
    menuIndex: 0
})

export const actions = {
    setMenuIndex(context, payload) {
        context.commit('setMenuIndex', payload);
    }
}

export const mutations = {
    setMenuIndex(state, payload) {
        state.menuIndex = payload
    }
}