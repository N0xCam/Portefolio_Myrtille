<template>

<h2> Me contacter !</h2>

  <div id="form"></div>

  <form ref="form" @submit.prevent="sendEmail">
    <label id="firstname">Prénom : </label>
    <input type="text" name="user_name">
    <label id="lastname">Nom : </label>
    <input type="lastname" name="user_lastname">
    <label id="subject">Objet : </label>
    <input type="Object" name="user_object">
    <label id="yourmessage">Message : </label>
    <textarea name="message"></textarea>
    <input type="submit" value="Soumettre">
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






<style scoped>

h2 {
  padding-top:20em;
}
form {
  margin-left: 5em;
  margin-right: 5em;
  font-family: "reality", sans-serif;
  font-weight: bolder;
  font-size: 2em;
  display: flex;
  flex-direction: column;
  border: solid;
};

input {
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 2em;
  
  
};

input[type=text]:focus {
  border: 3px solid #555;
};

label {
  margin-left: 2em;
}

</style>