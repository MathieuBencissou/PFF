<template>
  <nav class="navbar navbar-expand navbar-dark bg-dark">
    <div class="container">
      <div class="navbar-header">
        <router-link class="navbar-brand" to="/">Alumni</router-link>
      </div>
      <ul class="nav navbar-nav">
        <router-link
          v-if="isLoggedIn"
          class="nav-item nav-link"
          :to="{ name: 'Homepage' }"
        >Accueil</router-link>
        <router-link
          v-if="isLoggedIn"
          class="nav-item nav-link"
          :to="{ name: 'Challenges' }"
        >Challenges</router-link>
        <router-link
          v-if="isLoggedIn"
          class="nav-item nav-link"
          :to="{ name: 'Jobs' }"
        >Trouve un emploi</router-link>
        <router-link v-if="!isLoggedIn" class="nav-item nav-link" :to="{ name: 'Login' }">Login</router-link>
        <router-link
          v-if="isLoggedIn"
          class="nav-item nav-link"
          :to="{ name: 'Partner' }"
        >Trouve ton partenaire !</router-link>
        <router-link
          v-if="!isLoggedIn"
          class="nav-item nav-link"
          :to="{ name: 'Register' }"
        >Register</router-link>
        <a class="nav-item nav-link" v-if="isLoggedIn" @click.prevent="logout" href="#">Déconnexion</a>
      </ul>
    </div>
  </nav>
</template>

<script>
import User from "../apis/User";
import { mapGetters } from "vuex";


export default {
  computed: {
    ...mapGetters(["isLoggedIn"])
  },

  methods: {
    logout() {
      User.logout().then(() => {
        localStorage.removeItem("token");
        this.$store.commit("LOGIN", false);
        this.$router.push({ name: "Home" });
      });
    }
  }
};
</script>

<style>
.router-link-exact-active {
  color: #ffffff !important;
  transition: all 0.25s;
}
</style>
