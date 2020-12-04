<template>
  <div class="home col-8 mx-auto py-5 mt-5">
    <h2>Inscrivez-vous!</h2>
    <div class="card" v-for="challenge in AllChallenges" :key="challenge.id">
    <!-- <div class="card-body" v-if="user">
        <h4>Hello, {{ user.name }}</h4>
        <span>{{ user.email }}</span>
      </div> -->
      <h4>Titre</h4>
      <p>{{challenge.titre}}</p>
      <h4>Détails</h4>
      <p>{{challenge.details}}</p>
      <h4>Créateur</h4>
      <p>{{challenge.contact}}</p>
      <h4>Nombre d'inscrits</h4>
      <p>{{challenge.nb_inscrits}}</p>
      <h4>Date limite</h4>
      <p>{{challenge.date_limite}}</p>
      <h4>Technos</h4>
      <p>{{challenge.technos}}</p>
      <!-- <h4>Plus que</h4>
      <p>{{dayDiff(datenow(),challenge.date_limit)}}</p> -->
      <div v-if="user.id == challenge.user_id">
        <p><router-link :to="{ name: 'EditChallenge', params: {id: challenge.id}}"><button >edit</button></router-link>
        <button @click="DeleteChallenge(challenge.id)">trash</button></p>
      </div>
    </div>
    <router-link to="/AddChallenge"><button>Add New</button></router-link>
  </div>
          <!-- <router-link :to="{ name: 'EditChallenge', params: {id: challenge.id}}">Show</router-link>
        <router-link :to="{ name: 'admin-video-edit', params: {id: video.id}}">Edit</router-link> -->
</template>

<script>
import User from "../apis/User";
import Challenges from "../apis/Challenges";
import { mapState } from "vuex";

export default {
  name: "Challenges",
  computed: {
    ...mapState({
      AllChallenges: state => state.challenges,
      user: state => state.auth.user,
      // dayDiff(d1, d2) {
      //   d1 = d1.getTime() / 86400000;
      //   d2 = d2.getTime() / 86400000;
      //   return new Number(d2 - d1).toFixed(0);
      // }
      //je définie Allchallenges comme l'état actuel avec tous les challenges
    })
  },
  methods: {
    DeleteChallenge(id) {
      Challenges.DeleteChallenge(id)
        .then(() => {
          this.$store.commit("REMOVECHALLENGE", id);
        })
        .catch(error => {
          if (error.response.status === 422) {
            this.errors = error.response.data.errors;
          }
        });
    },
  },
  mounted() {
    User.auth()
    .then(response => {

      this.$store.commit("AUTH_USER", response.data);
    });
    Challenges.GetChallenges().then(response =>{
      this.$store.commit("CHALLENGES", response.data);
    });
  }
};
</script>
