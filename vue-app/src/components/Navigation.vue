<template>
  <nav class="navbar navbar-expand navbar-dark bg-dark">
    <div class="container">
      <div class="navbar-header">
        <router-link v-if="!isLoggedIn" class="navbar-brand" to="/"></router-link>
      </div>
      <ul class="nav navbar-nav">
        <router-link
          v-if="isLoggedIn"
          class="nav-item nav-link"
          :to="{ name: 'Homepage' }"
        >{CODING ALUMNI}</router-link>
        <router-link
          v-if="isLoggedIn"
          class="nav-item nav-link"
          :to="{ name: 'Trombinoscope' }"
        >Trombinoscope</router-link>
        <router-link
          v-if="isLoggedIn"
          class="nav-item nav-link"
          :to="{ name: 'Challenges' }"
        >Challenges</router-link>
        <router-link
          v-if="isLoggedIn"
          class="nav-item nav-link"
          :to="{ name: 'Partner' }"
        >Trouve ton partenaire</router-link>
        <router-link
          v-if="isLoggedIn"
          class="nav-item nav-link"
          :to="{ name: 'Jobs' }"
        >Trouve un emploi</router-link>
        <router-link v-if="!isLoggedIn" class="nav-item nav-link" :to="{ name: 'Login' }">Login</router-link>
        <router-link
          v-if="!isLoggedIn"
          class="nav-item nav-link"
          :to="{ name: 'Register' }"
        >Register</router-link>
        <router-link
          class="nav-item nav-link"
          :to="{ name: 'ContactUs' }"
        >Contactez nous</router-link>
        <a class="nav-item nav-link" v-if="isLoggedIn" @click.prevent="logout" href="#">Déconnexion</a>
        <router-link
          v-if="isLoggedIn"
          class="nav-item nav-link"
          :to="{ name: 'Profil' }"
        ><b-avatar badge badge-top badge-offset="2px"></b-avatar></router-link>    
        <router-link
          v-if="isdmin"
          class="nav-item nav-link"
          :to="{ name: 'AdminChallenges' }"
          style="background-color:red; color:yellow"
          >Admin</router-link>
      </ul>
    </div>
  </nav>
</template>

<script>
import User from "../apis/User";
import { mapGetters } from "vuex";


export default {
  computed: {
    ...mapGetters(["isLoggedIn", "isdmin"])
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
