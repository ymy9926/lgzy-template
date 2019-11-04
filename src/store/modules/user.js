import { loadFromLocal } from '@/common/js/store'
const state = () => ({ user: {}, isLogin: false })

const mutations = {
    setUser(state, val) {
        state.user = val
    }
}

const actions = {
    setUser: ({
        commit
    }, user) => {
        commit('setUser', user)
    }
}

const getters = {
    isLogin: () => {
        let local = loadFromLocal('login_info', 'user', null);
        console.log('getters-islogin', local);
        return state.isLogin;
    },
    user: () => {
        return state.user;
    }
}

export default { namespaced: true, state, mutations, actions, getters }