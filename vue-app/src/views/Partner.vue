<template>
<div class="home col-8 mx-auto py-5 mt-5">
    <h1>Trouve ton partenaire professionel !</h1>

    
    <div class="card" v-for="project in AllProjects" :key="project.id">
    <!-- <div class="card-body" v-if="user">
        <h3>Hello, {{ user.name }}</h3>
        <span>{{ user.email }}</span>

      </div> -->
      <p>{{project.titre}}</p>
      <p>{{project.description}}</p>
      <p>{{project.langage}}</p>
      <p>{{project.pseudo}}</p>
      <p>{{project.id}}</p>
    <p><router-link :to="{ name: 'EditProject', params: {id: project.id}}"><button >edit</button></router-link>
        <button @click="DeleteProject(project.id)">trash</button></p>
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
      AllProjects: state => state.projects
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