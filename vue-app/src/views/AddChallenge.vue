<template>
  <div class="home col-5 mx-auto py-5 mt-5">
    <h1 class="text-center">Création d'un nouveau challenge</h1>
    <div class="card">
      <div class="card-body">
        <div class="form-group">
          <label for="titre">Titre:</label>
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
          <label for="details">Détails:</label>
          <input
            type="text"
            v-model="form.details"
            class="form-control"
            id="details"
          />
          <span class="text-danger" v-if="errors.details">
            {{ errors.details[0] }}
          </span>
        </div>
        <div class="form-group">
          <label for="date_limite">Date limite:</label>
          <input
            type="date"
            v-model="form.date_limite"
            class="form-control"
            id="date_limite"
          />
          <span class="text-danger" v-if="errors.date_limite">
            {{ errors.date_limite[0] }}
          </span>
        </div>
        <div class="form-group">
          <label for="technos">Technos:</label>
          <input
            type="text"
            v-model="form.technos"
            class="form-control"
            id="technos"
          />
          <span class="text-danger" v-if="technos">
            {{ errors.technos[0] }}
          </span>
        </div>
        <button
          type="submit"
          @click.prevent="AddChallenge"
          class="btn btn-primary btn-block"
        >
          Créez votre challenge!
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Challenges from "../apis/Challenges";
import { mapState } from "vuex";

export default {
  data() {
    return {
      form: {
        titre: "",
        details: "",
        contact: "",
        date_limite: "",
        user_id: "",
        nb_inscrits: "",
        technos: ""
      },
      errors: []
    };
  },
  computed: {
    ...mapState({
      AllChallenges: state => state.challenges,
      user: state => state.auth.user
      //je définie Allchallenges comme l'état actuel avec tous les challenges
    })
  },
  methods: {
    //quand on clique sur le boutton @click-prevent la fonction ci-dessous
    AddChallenge() {
      this.form.user_id = this.user.id;
      this.form.contact = this.user.name + ", contact: " + this.user.email;
      Challenges.AddChallenge(this.form)
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
