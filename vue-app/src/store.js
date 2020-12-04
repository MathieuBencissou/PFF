import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    auth: {
      login: false,
      user: [],
    },
    challenges: [],
    projects : []
    //base de donnée en local dans notre vue
  },

  getters: {
    isLoggedIn(state) {
      return state.auth.login;
    },
    getUserId(state) {
      return state.auth.user.id;
    }
    //des getters
  },

  mutations: {
    //modifier en local les données
    LOGIN(state, status) {
      state.auth.login = status;
      state.auth.user = [];
    },

    AUTH_USER(state, user) {
      state.auth.user = user;
    },
    CHALLENGES(state, challenges) {
      state.challenges = challenges;
    },
    PROJECTS(state, projects) {
      state.projects = projects;
    },
    REMOVECHALLENGE(state, id) {
      state.challenges  = state.challenges.filter(challenge => challenge.id !== id);
    },
    REMOVEPROJECT(state, id) {
      state.projects  = state.projects.filter(project => project.id !== id);
    }
  },

  actions: {
  },
});
