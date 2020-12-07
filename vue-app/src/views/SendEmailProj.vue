<template>
<div class="home col-8 mx-auto py-5 mt-5">
  <form class="input-group mb-3" @submit.prevent="sendEmail">
      <div class="form-group">
    <!-- <label>Email Créateur</label> -->
    <input class="form-control" type="hidden" name="creator_email" v-model="challenge.contact">
     </div>
    <div class="form-group">
    <label>Votre nom</label>
    <input class="form-control" type="text" name="user_name" v-model="user.name">
    </div>
      <div class="form-group">
    <label>Votre email</label>
    <input class="form-control" type="email" name="user_email" v-model="user.email" >
     </div>
        <div class="form-group">
    <label>Votre message</label>
    <textarea class="form-control" name="message"></textarea>

    <input type="submit" value="Envoyer">
         </div>
  </form>
  </div>
</template>

<script>
import emailjs from 'emailjs-com';
import { mapState } from 'vuex';
export default {
    computed: {
    ...mapState(['challenges']),
    challenge() {
      return this.challenges.find(chal => chal.id == this.$route.params.id);
    },
    ...mapState({
      user: state => state.auth.user
    })
  },
  methods: {
    
    sendEmail: (e) => {
      emailjs.sendForm('contact_service', 'template_2', e.target, 'user_RpKHwiJRNOVThmx1EnSxZ')
        .then((result) => {
            console.log('SUCCESS!', result.status, result.text);
      
        }, (error) => {
            console.log('FAILED...', error);
        });
    
    }
  }
}
</script>