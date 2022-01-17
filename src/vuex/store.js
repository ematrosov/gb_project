import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'


Vue.use(Vuex);

let store = new Vuex.Store({
    state: {
        users: []
    },
    mutations: {
        SET_USERS_TO_STATE: (state, users) => {
            state.users = users;
        },
        ADD_NEW_USER: (state, user) => {
            state.users.push(user)
        },
        LOGIN (state, user) {
            state.users.email = user.email
            state.users.password = user.password
        }
    },
    getters: {
        USERS (state) {
            return state.users;
        },
    },
    actions: {
        GET_USERS_FROM_API({commit}) {
            return axios('http://localhost:3000/users', {
              method: "GET"
            })
              .then((users) => {
                commit('SET_USERS_TO_STATE', users.data);
                return users;
              })
              .catch((error) => {
                console.log(error)
                return error;
              })
        },
        ADD_USER ({commit}, user) {
            commit('ADD_NEW_USER', user)
        },
        LOGIN_USER ({commit}, user){
            commit('LOGIN', user)
        }
    }      
});

export default store;