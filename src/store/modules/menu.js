const state = {
    data:[
		{name: 'home', redict: '/home'}
    ]    
}

const actions = {
    saveTemplate({commit},value) {
        commit('SAVE_MENU', value);
	}
}

const mutations = {
    SAVE_MENU(state, data) {
        state.data = data;
    },
}

export default {
    state,
    actions,
    mutations
}