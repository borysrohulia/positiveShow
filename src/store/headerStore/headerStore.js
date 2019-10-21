const state = {
    showDrawer: false
}
const action = {
    getDrawerAction(ctx, payload) {
        ctx.commit('GET_DRAWER_ACTION', payload)
    }
}
const mutations = {
    GET_DRAWER_ACTION(state, drawValue) {
        state.showDrawer = drawValue
    }
}

export default {
    state,
    action,
    mutations
}
