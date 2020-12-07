<template>
  <div class="home col-8 mx-auto py-5 mt-5">
    <h2>Challenges</h2>
    <router-link to="/Admin/Challenges" ><button style="background-color:red; color:yellow">Challenges</button></router-link>
    <router-link to="/Admin/projects"><button>Projets</button></router-link>
    <router-link to="/Admin/users"><button>Users</button></router-link>

    <div class="card" v-for="challenge in AllChallenges" :key="challenge.id">
    <!-- <div class="card-body" v-if="user">
        <h4>Hello, {{ user.name }}</h4>
        <span>{{ user.email }}</span>
      </div> -->
      <div class="row">
        <div class="col">
          <h4>Titre</h4>
          <p>{{challenge.titre}}</p>
        </div>
     
        <div class="col">
          <h4>Créateur</h4>
          <p>{{challenge.contact}}</p>
        </div>
        <div class="col">
          <h4>Date limite</h4>
          <p>{{challenge.date_limite}}</p>
        </div>
        <div class="col">
          <h4>Technos</h4>
          <p>{{challenge.technos}}</p>
        </div>
        <div class="col">
          <h4>Nombre d'inscrits</h4>
          <p>{{challenge.nb_inscrits}}
            <button @click="Addplayer(challenge.id)" 
            style="float:right;background-color:red; color:yellow">
            +1 inscrit
            </button>
            <button  @click="DeleteChallenge(challenge.id)" 
              style="float:right;background-color:red; color:yellow">trash
            </button>
            <router-link :to="{ name: 'EditChallenge', params: {id: challenge.id}}">
              <button  style="float:right;background-color:red; color:yellow">edit</button>
            </router-link>
          </p>
        </div>
      </div>

      <h4>Description</h4>
      <p>{{challenge.details}}</p>


      <!-- <h4>Plus que</h4>
      <p>{{dayDiff(datenow(),challenge.date_limit)}}</p> -->
    </div>
    <router-link to="/Admin/AddChallenge"><button>Add New</button></router-link>
  </div>
  
          <!-- <router-link :to="{ name: 'EditChallenge', params: {id: challenge.id}}">Show</router-link>
        <router-link :to="{ name: 'admin-video-edit', params: {id: video.id}}">Edit</router-link> -->
</template>

<script>
import User from "../apis/User";
import Challenges from "../apis/Challenges";
import { mapState } from "vuex";

export default {
  name: "AdminChallenges",
  computed: {
    ...mapState ({
      AllChallenges: state => state.challenges,
      user: state => state.auth.user,
    // ...mapGetters (["isavailable"])
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
    Addplayer(id) {
      Challenges.AddPlayer(id)
      .then(() => {
      this.$store.commit("ADDPLAYER", id);
      })
      .catch(error => {
        if (error.response.status === 422) {
          this.errors = error.response.data.errors;
        }
      });
    },
    EditPlayer(chalid) {
      console.log(this.user.challenge1_id)
      console.log(this.user.challenge2_id)
      console.log(this.user.challenge3_id)
      if (this.user.challenge1_id==(-1))
      {
        this.user.challenge1_id = chalid;
      }
      else if (this.user.challenge2_id==(-1))
      {
        this.user.challenge2_id = chalid;
      }
      else if (this.user.challenge3_id==(-1))
      {
        this.user.challenge3_id= chalid;
      }
      else
      {
        return false;
      }
      User.EditUser(this.user)
      .then(() => {
      })
      .catch(error => {
        if (error.response.status === 422) {
          this.errors = error.response.data.errors;
        }
      });
    } 
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

