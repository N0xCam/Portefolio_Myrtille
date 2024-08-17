<template>
  <div id="myCV">
  <div class="container my-5">
    <h1 class="mb-5">Mon Curriculum Vitae</h1>

    <modale :revele="revele" :toggleModale="toggleModale"></modale>
    <div v-on:click="toggleModale" class="btn btn-success"><img src="../assets/images/modal_1.png"></div>
  </div>
</div>

<div id="myTextbook">
  <div class="container my-5">
    <h1 class="mb-5">Mon Cahier des Charges</h1>

    <modale :revele="revele" :toggleModale="toggleModale"></modale>
    <div v-on:click="toggleModale" class="btn btn-success"><img src="../assets/images/modal_2.png"></div>
  </div>
</div>

<div id="Comments">
  <div class="container my-5">
    <h1 class="mb-5">Dynamiser un espace commentaire</h1>

    <modale :revele="revele" :toggleModale="toggleModale"></modale>
    <div v-on:click="toggleModale" class="btn btn-success"><img src="../assets/images/modal_3.png"></div>
  </div>
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

img {
  height: 80em;
  width: 50em;
  display: flex;
  justify-content: center;
};

img:hover  {
  
  cursor: pointer;
};

h1 {
  font-family: "milestone", sans-serif;
  font-size: 2em;
}
</style>