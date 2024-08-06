<template>
    <div class="container my-5">
      <h1 class="mb-5">Une modale en Vue JS !</h1>
  
      <modale :revele="revele" :toggleModale="toggleModale"></modale>
      <div v-on:click="toggleModale" class="btnCV">Ouvre la modale</div>
    </div>
  </template>
  
  
  <script>
  import Modale from "../components/Modale.vue";
  
  export default {
    name: "Contenu",
    data() {
      return {
        revele: false
      };
    },
    components: {
      modale: Modale
    },
    methods: {
      toggleModale: function() {
        this.revele = !this.revele;
      }
    }
  };
  </script>
  
  
  <style>
#btnCV {
    background-image: url('../assets/images/modal_1.png');
}
  
  </style>