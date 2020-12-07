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
    projects : [],
    allusers: []
    //base de donnée en local dans notre vue
  },

  getters: {
    isLoggedIn(state) {
      return state.auth.login;
    },
    //des getters
    isdmin(state) {
    return (state.auth.user.dmin==38)
    }
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
    ADDPLAYER(state, id) {
      let i = state.challenges.find(challenge => challenge.id === id)
      i.nb_inscrits= i.nb_inscrits+1;
    },
    PROJECTS(state, projects) {
      state.projects = projects;
    },
    REMOVECHALLENGE(state, id) {
      state.challenges  = state.challenges.filter(challenge => challenge.id !== id);
    },
    REMOVEPROJECT(state, id) {
      state.projects  = state.projects.filter(project => project.id !== id);
    },
    ALLUSERS(state, users) {
      state.allusers = users;
    }
  },

  actions: {
  },
});
