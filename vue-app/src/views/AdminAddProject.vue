<template>
  <div class="home col-5 mx-auto py-5 mt-5">
    <h1 class="text-center">Création d'un nouveau projet</h1>
    <div class="card">
      <div class="card-body">
        <div class="form-group">
          <label for="titre">Titre</label>
          <input
            type="text"
            v-model="form.titre"
            class="form-control"
            id="titre"
          />
          <span class="text-danger" v-if="errors.titre">
            {{ errors.titre[0] }}
          </span>
        </div>
        <div class="form-group">
          <label for="description">Description</label>
          <textarea
            type="text"
            v-model="form.description"
            class="form-control"
            rows="5"
            id="details">
          </textarea>
          <span class="text-danger" v-if="errors.description">
            {{ errors.description[0] }}
          </span>
        </div>
        <div class="form-group">
          <label for="langage">Technos</label>
          <input
            type="text"
            v-model="form.langage"
            class="form-control"
            id="langage"
          />
          <span class="text-danger" v-if="errors.langage">
            {{ errors.langage[0] }}
          </span>
        </div>
        <button
          type="submit"
          @click.prevent="AddProject"
          class="btn btn-primary btn-block"
        >
          Add your Project
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Projects from "../apis/Projects";
import { mapState } from "vuex";

export default {
  name:'AdminAddProject',
  data() {
    return {
      form: {
        titre: "",
        description: "",
        langage: "",
        pseudo: "",
        user_id: ""
      },
      errors: []
    };
  },
  computed: {
    ...mapState({
      AllProjects: state => state.projects,
      user: state => state.auth.user
      //je définie Allchallenges comme l'état actuel avec tous les challenges
    })
  },
  methods: {
    AddProject() {
      this.form.pseudo = this.user.name;
      this.form.user_id = this.user.id;
      Projects.AddProject(this.form)
        .then(() => {
          this.$router.push({ name: "AdminProjects" });
        })
        .catch(error => {
          if (error.response.status === 422) {
            this.errors = error.response.data.errors;
          }
        });
    }
  }
};
</script>
