<template>

<h2> Me contacter !</h2>

  <div id="form"></div>

  <form ref="form" @submit.prevent="sendEmail">
    <label id="first-name">Prénom : </label>
    <input type="text" name="user_name" required>
    <label id="last-name">Nom : </label>
    <input type="lastname" name="user_lastname" required>
    <label id="subject">Objet : </label>
    <input type="Object" name="user_object" required>
    <label id="yourmessage">Message : </label>
    <textarea name="message" required></textarea>
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
            alert ("Message envoyé");
            reset;
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
  padding-top:2em;
  padding-bottom: 2em;
  padding-left: 6em;
  font-size: 4em;
  font-family: "reality", sans-serif;
}
form {
  margin-left: 5em;
  margin-right: 5em;
  font-family: "caviar", sans-serif;
  font-weight: bolder;
  font-size: 2.5em;
  display: flex;
  flex-direction: column;
 
}

input {
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 10em;
  height: 4em;
  
}

textarea {
  height: 15em;
}

input[type=text]:focus {
  border: 3px solid #555;
}

label {
  margin-left: 2em;
  margin-top: -2em;
  
}

#submit {
  font-size: 2em;
}




</style>