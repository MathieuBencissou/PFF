<template>
  <div class="home col-8 mx-auto py-5 mt-5">
    <h2>Users</h2>
    <router-link to="/Admin/Challenges"><button>Challenges</button></router-link>
    <router-link to="/Admin/projects"><button>Projets</button></router-link>
    <router-link to="/Admin/users" ><button style="background-color:red; color:yellow">Users</button></router-link>
     <h3>Liste des élèves</h3>
    <div class="card" v-for="user in AllUsers" :key="user.id">
      <div class="row">
        <div class="col">
          <h4>Nom</h4>
          <p>{{user.name}}</p>
        </div>
     
        <div class="col">
          <h4>Email</h4>
          <p>{{user.email}}</p>
        </div>

        <!-- <p><router-link :to="{ name: 'EditChallenge', params: {id: challenge.id}}"><button >edit</button></router-link>
        <button @click="DeleteChallenge(challenge.id)">trash</button></p>
        <router-link to="/AddChallenge"><button>Add New</button></router-link> -->
      </div>
    </div>
  </div>
          <!-- <router-link :to="{ name: 'EditChallenge', params: {id: challenge.id}}">Show</router-link>
        <router-link :to="{ name: 'admin-video-edit', params: {id: video.id}}">Edit</router-link> -->
</template>
<script>
import User from "../apis/User";
import Challenges from "../apis/Challenges";
import { mapState } from "vuex";

export default {
  name: "AdminUsers",
  computed: {
    ...mapState({
      AllChallenges: state => state.challenges,
      user: state => state.auth.user,
      AllUsers: state => state.allusers,

      // dayDiff(d1, d2) {
      //   d1 = d1.getTime() / 86400000;
      //   d2 = d2.getTime() / 86400000;
      //   return new Number(d2 - d1).toFixed(0);
      // }
      //je définie Allchallenges comme l'état actuel avec tous les challenges
    })
  },
  // methods: {
  //   DeleteChallenge(id) {
  //     Challenges.DeleteChallenge(id)
  //       .then(() => {
  //         this.$store.commit("REMOVECHALLENGE", id);
  //       })
  //       .catch(error => {
  //         if (error.response.status === 422) {
  //           this.errors = error.response.data.errors;
  //         }
  //       });
  //   },
  // },
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
