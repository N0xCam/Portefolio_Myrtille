<template>
  
<h2 style="font-size: 3em; padding-bottom: 1em;"> Mes Créations </h2>

  <div class="container my-5">
    <h1 class="mb-5" style="font-size: 2.5em; padding-bottom: 1em;">Mon Curriculum Vitae</h1>

    <modale :revele="revele" :toggleModale="toggleModale"></modale>
    <div v-on:click="toggleModale" class="btn btn-success"><img src="../assets/images/modal_1.png"></div>
  </div>



  <div class="container my-5">
    <h1 class="mb-5" style="font-size: 2.5em; padding-top:1em; padding-bottom: 1em;">Mon Cahier des Charges</h1>

    <modale :revele="revele" :toggleModale="toggleModale"></modale>
    <div v-on:click="toggleModale" class="btn btn-success"><img src="../assets/images/modal_2.png"></div>
  </div>



  <div class="container my-5">
    <h1 class="mb-5" style="font-size: 2.5em; padding-top:1em; padding-bottom: 1em;">Dynamiser un espace commentaire</h1>

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
  padding-left: 6em;
};


img {
  height: 80em;
  width: 60em;
  display: flex;
  justify-content: center;
};



h1 {
  font-family: "milestone", sans-serif;
  font-size: 5em;
};



</style>