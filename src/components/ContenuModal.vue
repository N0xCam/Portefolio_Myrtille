<template>

<div id="Creations"></div>
  
<h2 style="font-size: 3em; padding-bottom: 1em;"> Mes Créations </h2>

  <div class="container my-5">
    <h1 class="mb-5">Mon Curriculum Vitae</h1>

    <modale :revele="revele" :toggleModale="toggleModale"></modale>
    <div v-on:click="toggleModale" class="btn btn-success"><img src="../assets/images/modal_1.png"></div>
  </div>



  <div class="container my-5">
    <h1 class="mb-5" >Mon Cahier des Charges</h1>

    <modale :revele="revele" :toggleModale="toggleModale"></modale>
    <div v-on:click="toggleModale" class="btn btn-success"><img src="../assets/images/modal_2.png"></div>
  </div>



  <div class="container my-5">
    <h1 class="mb-5">Dynamiser un espace commentaire</h1>

    <modale :revele="revele" :toggleModale="toggleModale"></modale>
    <div v-on:click="toggleModale" class="btn btn-success"><img src="../assets/images/modal_3.png"></div>
  </div>

</template>


<script>
import MyModale from "./FenetreModal.vue";

export default {
  name: "MyContenu",
  data() {
    return {
      revele: false
    };
  },
  components: {
    modale: MyModale
  },
  methods: {
    toggleModale: function() {
      this.revele = !this.revele;
    }
  }
};
</script>


<style scoped>

* {
  padding-left: 3.5em;
}

.mb-5 {
  font-size: 2em; 
  padding-top:1em; 
  padding-bottom: 1em;
  font-family: "magnisia", sans-serif;

}

img {
  height: 80em;
  width: 60em;
  display: flex;
  justify-content: center;
  align-items: center;
}

img:hover {
  box-shadow: 20px 5px 20px  rgb(197, 84, 109);
  width: 90%;
  border-radius: 2%;
}



h1 {
  font-family: "milestone", sans-serif;
  font-size: 5em;
}

h2 {
  font-family: "reality", sans-serif;
  font-size: 2em;
}

</style>