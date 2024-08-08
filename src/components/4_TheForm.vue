<template>

<h2> Me contacter !</h2>

  <div id="form"></div>

  <form ref="form" @submit.prevent="sendEmail">
    <label>Prénom</label>
    <input type="text" name="user_name">
    <label>Nom</label>
    <input type="lastname" name="user_lastname">
    <label>Objet</label>
    <input type="Object" name="user_object">
    <label>Message</label>
    <textarea name="message"></textarea>
    <input type="submit" value="Send">
  </form>
</template>



<script>
import emailjs from '@emailjs/browser';

export default {
  methods: {
    sendEmail() {
      emailjs
        .sendForm('service_p8x0044', 'Form_Myrtille', this.$refs.form, {
          publicKey: 'JJGoBKX6MUn3en-Ek',
        })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    },
  },
};
</script>






<style>

form {
  padding-top: 50em;
  font-family: "magnisia", sans-serif;
  font-size: 2em;
};

input {
  margin-left: 2em;
}

</style>