<template>
  <div class="container my-5">
    <h1 class="mb-5">Mon Curriculum Vitae</h1>

    <modale :revele="revele" :toggleModale="toggleModale"></modale>
    <div v-on:click="toggleModale" class="btn btn-success"><img src="../assets/images/modal_1.png"></div>
  </div>

  <div class="container my-5">
    <h1 class="mb-5">Mon Cahier des Charges</h1>

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
import Modale from "./FenetreModal.vue";

export default {
  name: "MyContenu",
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


<style scoped>

img {
  height: 80em;
  width: 50em;
  display: flex;
  justify-content: center;
}
</style>