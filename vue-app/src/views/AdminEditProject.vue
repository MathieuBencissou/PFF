<template>
  <div class="home col-5 mx-auto py-5 mt-5">
    <h1 class="text-center">Modifiez votre projet</h1>
    <div class="card">
      <div id="info" class="card-body">
        <div class="form-group">
          <label for="titre">Titre</label>
          <input
            type="text"
            v-model="project.titre"
            class="form-control"
            
          />
          <span class="text-danger" v-if="errors.titre">
            {{ errors.titre[0] }}
          </span>
        </div>
        <div class="form-group">
          <label for="details">Description</label>
          <textarea
            type="text"
            v-model="project.description"
            rows="5"
            class="form-control"
            id="details">
          </textarea>
          <span class="text-danger" v-if="errors.description">
            {{ errors.description[0] }}
          </span>
        </div>
        <div class="form-group">
          <label for="user_id">Technos</label>
          <input
            type="text"
            v-model="project.langage"
            class="form-control"
            id="langage"
          />
          <span class="text-danger" v-if="errors.langage">
            {{ errors.langage[0] }}
          </span>
        </div>
                <div class="form-group">
          <label for="pseudo">Créateur du projet</label>
          <input
            type="text"
            v-model="project.pseudo"
            class="form-control"
            id="pseudo"
          />
          <span class="text-danger" v-if="errors.pseudo">
            {{ errors.pseudo[0] }}
          </span>
        </div>
        <button
          type="submit"
          @click.prevent="EditProject()"
          class="btn btn-primary btn-block"
        >
          Confirmation
        </button>

      </div>
    </div>
  </div>
</template>

<script>
import Projects from "../apis/Projects";
import { mapState } from 'vuex';

export default {
  name: "AdminEditProject",
  data() {
    return {
      form: {
        titre: "",
        description: "",
        langage: "",
        pseudo: "",
        // user_id:""
      },
      errors: []
    }
  },
  computed: {
    ...mapState(['projects']),
    project() {
      return this.projects.find(proj => proj.id == this.$route.params.id);
    }
  },
  methods: {
    EditProject() {
      Projects.EditProject(this.project)
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
}
</script>