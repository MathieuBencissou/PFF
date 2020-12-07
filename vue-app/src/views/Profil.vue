<template>
	<div class="container">
		<h1>Salut {{ user.firstname }}</h1>
	

		<b-form @submit="onSubmit" @reset="onReset" v-if="show">

<b-form-group id="input-group-2" label="Votre prénom:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="user.firstname"
          required
          placeholder="Votre prénom"
        ></b-form-input>
      </b-form-group>

<!-- ---------------------------- -->


       <b-form-group id="input-group-2" label="Votre nom:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="user.name"
          required
          placeholder="Votre nom"
        ></b-form-input>
      </b-form-group>
  <!-- ---------------------------- -->    

      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
        description="Votre email"
      >

        <b-form-input
          id="input-1"
          v-model="user.email"
          type="text"
          required
          placeholder="Votre email"
        ></b-form-input>

      </b-form-group>
<!-- ---------------------------- -->
       <b-form-group
        id="input-group-1"
        label="Promo:"
        label-for="input-1"
        description="Votre promo"
      >

        <b-form-input
          id="input-1"
          v-model="user.promo"
          type="text"
          required
          placeholder="Votre promo"
        ></b-form-input>
        
      </b-form-group>

  <!-- ---------------------------- -->

   <b-form-group
        id="input-group-1"
        label="Specialisation:"
        label-for="input-1"
        description="Votre spécialisation"
      >

        <b-form-input
          id="input-1"
          v-model="user.specialisation"
          type="text"
          required
          placeholder="Votre specialisation"
        ></b-form-input>
        
      </b-form-group>
<!-- ---------------------------- -->

 <b-form-group
        id="input-group-1"
        label="Techno:"
        label-for="input-1"
        description="Vos technos preferrées"
      >

        <b-form-input
          id="input-1"
          v-model="user.techno"
          type="text"
          required
          placeholder="Vos technos preferrées"
        ></b-form-input>
        
      </b-form-group>

   <!-- ---------------------------- -->

<b-form-group
        id="input-group-1"
        label="Emploi:"
        label-for="input-1"
        description="Votre job"
      >

        <b-form-input
          id="input-1"
          v-model="user.emploi_actuel"
          type="text"
          required
          placeholder="Votre job"
        ></b-form-input>
        
      </b-form-group>

 <!-- ---------------------------- -->

  
      <!--<b-form-group id="input-group-4">
        <b-form-checkbox-group v-model="form.checked" id="checkboxes-4">
          <b-form-checkbox value="me">Check me out</b-form-checkbox>
          <b-form-checkbox value="that">Check that out</b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group> -->

      <b-button type="submit" variant="primary">Modifier vos informations</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
   
		
	</div>
</template>

<script>
import User from "../apis/User";
import { mapState } from "vuex";
export default {
	name: 'Profil',
	data() {
      return {
        form: {
          email: '',
          name: '',
          firstname: '',
          specialisation:'',
          techno:'',
          emploi_actuel:'',
          promo:'',
          
          checked: []
        },
        
        show: true
      }
    },
  computed: {
    ...mapState({
      user: state => state.auth.user
    })
  },
  mounted() {
    User.auth().then(response => {
      this.$store.commit("AUTH_USER", response.data);
    });
    },
     methods: {
      onSubmit(evt) {
        /*evt.preventDefault()
        alert(JSON.stringify(this.form))*/
        evt.preventDefault()
        User.EditProfil(this.user)
        .then(() => {
          
          this.$router.push({ name: "Homepage" });
        })
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.user.email =  ' '
        this.form.name = ''
        this.user.promo = ''
        this.user.techno = ''
        this.user.specialisation = ''
        this.user.emploi = ''
       
        this.form.checked = []
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
};
</script>

<style>
	
</style>