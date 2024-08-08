<template>
  <div class="container my-5">
    <h1 class="mb-5">Une modale en Vue JS !</h1>

    <modale id="CV" :revele="revele" :toggleModale="toggleModale"></modale>
    <div v-on:click="toggleModale" class="btn btn-success">Ouvre la modale</div>
  </div>

  <div class="container my-5">
    <h1 class="mb-5">Une modale en Vue JS !</h1>

    <modale id="Cahier":revele="revele" :toggleModale="toggleModale"></modale>
    <div v-on:click="toggleModale" class="btn btn-success">Ouvre la modale</div>
  </div>
</template>


<script>
import Modale from "./MesModales.vue";

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