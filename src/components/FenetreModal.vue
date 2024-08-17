<template>
  <div class="bloc-modale" v-if="revele">
    <div class="overlay" v-on:click="toggleModale"></div>

    <div class="modale card">
      <div v-on:click="toggleModale" class="btn-modale btn btn-danger">X</div>


      <div id="MyCV">
          <h2>Mon Curriculum Vitae</h2>
          <img src="../assets/images/modal_1.png">
          <h3> 08/05/2024</h3>
          <h4> HTML, CSS </h4>
          <link href="https://github.com/N0xCam/CV_Regina_Phalange">
      </div>


      <div id="MyTextbook">
          <h2>Mon Cahier des Charges</h2>
          <img src="../assets/images/modal_2.png">
          <h3> 30/05/2024</h3>
          <h4> Canva, Word </h4>
          <link href="https://github.com/N0xCam/CV_Regina_Phalange">
      </div>


      <div id="MyComments">
          <h2>Dynamiser mon espace commentaire</h2>
          <img src="../assets/images/modal_3.png">
          <h3> 12/07/2024</h3>
          <h4> JavaScript </h4>
          <link href="https://github.com/N0xCam/DevoirCommentaire">
      </div>

    </div>
  </div>
</template>


<script>
export default {
  name: "Modale",
  props: ["revele", "toggleModale"]
};
</script>


<style scoped>

div {
  display: flex;
  
};

h2 {
  display: flex;
  padding-top: -10em;
}

.bloc-modale {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.overlay {
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.modale {
  background: #f1f1f1;
  color: #333;
  padding: 40px;
  position: fixed;
  top: 30%;
}

.btn-modale {
  position: absolute;
  top: 10px;
  right: 10px;
}
</style>