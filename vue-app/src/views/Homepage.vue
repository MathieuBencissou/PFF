<template>
    <div class="home text-center py-5 mt-5">
    <h1>Homepage</h1>
  </div>
</template>

<script>
import User from "../apis/User";
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState({
      user: state => state.auth.user
    })
  },

  mounted() {
    User.auth().then(response => {
      this.$store.commit("AUTH_USER", response.data);
    });
  }
};
</script>
