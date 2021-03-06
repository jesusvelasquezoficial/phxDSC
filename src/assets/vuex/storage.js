import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    minEuroX: null,
    minDolarX: null,
    autenticado: true,
    user: {},
    url: {
      protocolo: 'http://',
      ip: ['localhost','127.0.0.1'],
      port: ['8081'],
    }
  },

  actions: {
    iniciarSesion: ({commit}, params) => {
      commit('INICIAR_SESION', params);
    },
    userLogged ({commit}, user) {
      commit('USER_LOGGED', user);
    },
    addMinEuroX({commit}, value){
      commit('ADD_MIN_EURO_X', value);
    },
    addMinDolarX({commit}, value){
      commit('ADD_MIN_EURO_X', value);
    }
  },

  mutations: {
    INICIAR_SESION: (state, params) => {
      // state
    },
    USER_LOGGED (state, user) {
      state.user = user;
    },
    ADD_MIN_EURO_X(state, value){
      state.minEuroX = value;
    },
    ADD_MIN_DOLAR_X(state, value){
      state.minDolarX = value;
    }
  },
});