<template>
  <div>
    <h3>Liste des élèves</h3>
    <div class="table">

            <div class="box" v-for="user in AllUsers" v-bind:key="user.id">
                <ul>
                <li>{{user.picture}}</li>
                <li>{{user.firstname}}</li>
                <li>{{user.name}}</li>
                <li>{{user.promo}}</li>
                <li>{{user.emploi_actuel}}</li>    
              </ul>
            </div>


    </div>
  </div>
</template>

<script>

 import User from "../apis/User";
 import { mapState } from "vuex";


 export default {
  name: "Trombinoscope",

  computed: {
    ...mapState({
      AllUsers: state => state.allusers,

      

    })
  },

  mounted() {
    User.getallusers().then(response => {
      this.$store.commit("ALLUSERS", response.data);
    });
  }
};



</script>



<style scoped>

h3 {
  text-align: center;
  margin-top:20px;
}

.table {

  display:grid;
  grid-template-columns:repeat(3,1fr);
  grid-gap:1rem;
}

.box {
  border: 1px solid black;
  background-color:white;
  padding:1rem;
  border-radius:5px;
  text-align:center;
  position: relative;
  cursor:pointer;
  padding:20px;
  margin:50px;
}


ul {
  list-style-type: none;
}

</style>