<template>
<div class="home col-8 mx-auto py-5 mt-5">
  <h2>Trouve ton partenaire professionel !</h2>
  <router-link to="/AddProject"><button>Add New</button></router-link>
  <div class="card" v-for="project in AllProjects" :key="project.id">
    <div class="row">
      <div class="col">
        <h4>Titre</h4>
        <p>{{project.titre}}</p>
      </div>
      <div class="col">
        <h4>Technos</h4>
        <p>{{project.langage}}</p>
      </div>
      <div class="col">
        <h4>Créateur du projet</h4>
        <p>{{project.pseudo}}</p>
      </div>
      <div class="col">
        <p>
          <button v-if="user.id == project.user_id" @click="DeleteProject(project.id)" 
            style="float:right;background-color:red; color:yellow">trash
          </button>
          <router-link :to="{ name: 'EditProject', params: {id: project.id}}">
            <button  v-if="user.id == project.user_id" style="float:right;background-color:red; color:yellow">edit</button>
          </router-link>
        </p>
      </div>
    </div>
    <h4>Description</h4>
    <p>{{project.description}}</p>
  </div>
  <router-link to="/AddProject"><button>Add New</button></router-link>
</div>
</template>

<script>
import User from "../apis/User";
import Projects from "../apis/Projects";
import { mapState } from "vuex";

export default {
  name: "Partner",
  computed: {
    ...mapState({
      AllProjects: state => state.projects,
      user: state => state.auth.user
    })
  },
methods: {
    DeleteProject(id) {
      Projects.DeleteProject(id)
        .then(() => {
          this.$store.commit("REMOVEPROJECT", id);
        })
        .catch(error => {
          if (error.response.status === 422) {
            this.errors = error.response.data.errors;
          }
        });
    }
  },
  mounted() {
    User.auth().then(response => {
      this.$store.commit("AUTH_USER", response.data);
    });
    Projects.GetProject().then(response =>{
      this.$store.commit("PROJECTS", response.data);
    });
  }
};
</script>