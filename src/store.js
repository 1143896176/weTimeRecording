import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        topath:''
    },
    mutations: {


        "TO_PTATH" : function (state,pth) {
            state.topath = pth;

        }
    },
    getters: {

    },
    actions: {
    }
});
export default store
