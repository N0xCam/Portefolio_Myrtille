<template>
  <div class="bloc-modale" v-if="revele">
    <div class="overlay" v-on:click="toggleModale"></div>

    
    <div class="modale card" id="button">
      <div v-on:click="toggleModale" class="btn-modale btn btn-danger">X</div>
      

      <div id="MyCV">
          <h2>Mon Curriculum Vitae</h2>
          <img src="../assets/images/modal_1.png">
          <h3> 08/05/2024</h3>
          <h4> HTML, CSS </h4>
          <a href="https://github.com/N0xCam/CV_Regina_Phalange" target="_blank"> Le lien vers mon CV </a>
      </div>


      <div id="MyTextbook">
          <h2>Mon Cahier des Charges</h2>

          <embed src="/src/assets/pdf/Cahier_des_charges.pdf" width="800" height="930" type="application/pdf"/>
          <a href="https://github.com/N0xCam/CV_Regina_Phalange" target="_blank"> </a>
        <h3> 30/05/2024</h3>
        <h4> Canva, Word </h4>
        <a href="../assets/pdf/Cahier_des_charges.pdf" target="_blank"> Mon Cahier des Charges </a>
      </div>


      <div id="MyComments">
          <h2>Dynamiser mon espace commentaire</h2>
          <img src="../assets/images/modal_3.png">
          <h3> 12/07/2024</h3>
          <h4> JavaScript </h4>
          <a href="https://github.com/N0xCam/DevoirCommentaire" target="_blank">Le lien vers mon espace commentaire </a>
      </div>

    </div>
  </div>
</template>


<script>
export default {
  name: "MyModale",
  props: ["revele", "toggleModale"]
};
</script>


<style scoped>

div {
  display: flex;
  
}

h2 {
  display: flex;
  font-family: "reality",sans-serif;
  font-size: 3em;
}

h3, h4, a {
  font-size: 1.5em;
}

.bloc-modale {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 2em;
  right: 2em;
  display: flex;
  justify-content: center;
  align-items: center;
}

#button:hover {
  cursor: pointer;
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

#MyCV {
  display: flex;
  flex-direction: column;
}

#MyTextbook {
  display: flex;
  flex-direction: column;
}

#MyComments{
  padding-top: 1.02em;
  display: flex;
  flex-direction: column;
}
</style>