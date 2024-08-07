<template>

<div class="modal-2">
      
  
    <modale :revele="revele" :toggleModale="toggleModale"></modale>
    <div v-on:click="toggleModale" class="btnCV"> <input type="button" class="button"> <img src="../assets/images/modal_2.png"/> </div>
  </div>

  <div class="modal-3">
    

    <modale :revele="revele" :toggleModale="toggleModale"></modale>
    <div v-on:click="toggleModale" class="btnCV"> <input type="button" class="button"> <img src="../assets/images/modal_3.png"/> </div>
  </div>
</template>




<script>
import Modale from "./MesModales2.vue";

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


</style>