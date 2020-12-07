<template>
  <div class="home col-5 mx-auto py-5 mt-5">
    <h1 class="text-center">Modifiez votre challenge</h1>
    <div class="card">
      <div id="info" class="card-body">
        <div class="form-group">
          <label for="Titre">Titre</label>
          <input
            type="text"
            v-model="challenge.titre"
            class="form-control"
            
          />
          <span class="text-danger" v-if="errors.titre">
            {{ errors.titre[0] }}
          </span>
        </div>
        <div class="form-group">
          <label for="details">Détails</label>
          <textarea
            type="text"
            v-model="challenge.details"
            rows="5"
            class="form-control"
            id="details">
          </textarea>
          <span class="text-danger" v-if="errors.details">
            {{ errors.details[0] }}
          </span>
        </div>
        <div class="form-group">
          <label for="user_id">Date limite</label>
          <input
            type="date"
            v-model="challenge.date_limite"
            class="form-control"
            id="date_limite"
          />
          <span class="text-danger" v-if="errors.date_limite">
            {{ errors.user_id[0] }}
          </span>
        </div>
        <div class="form-group">
          <label for="technos">Technos</label>
          <input
            type="text"
            v-model="challenge.technos"
            class="form-control"
            id="technos"
          />
          <span class="text-danger" v-if="errors.technos">
            {{ errors.user_id[0] }}
          </span>
        </div>
        <button
          type="submit"
          @click.prevent="EditChallenge()"
          class="btn btn-primary btn-block"
        >
          Confirmation
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import Challenges from "../apis/Challenges";
import { mapState } from 'vuex';

export default {
  name: "EditChallenge",
  data() {
    return {
      form: {
        titre: "",
        details: "",
        introduction: "",
        nb_inscrits: "",
        user_id:""
      },
      errors: []
    }
  },
  computed: {
    ...mapState(['challenges']),
    challenge() {
      return this.challenges.find(chal => chal.id == this.$route.params.id);
    }
  },
  methods: {
    EditChallenge() {
      Challenges.EditChallenge(this.challenge)
        .then(() => {
          this.$router.push({ name: "Challenges" });
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
