<template>
    <div class="bloc-modale" v-if="revele">
      <div class="overlay" v-on:click="toggleModale"></div>
  
      <div class="modale card">
        <div v-on:click="toggleModale" class="btnCV">X</div>
        <h2>Mon CV</h2>
        <h3> Date de création : 08/05/2024 </h3>
        <h4> HTML, CSS</h4>
        <h5> Consultez mon projet ! <link href="https://github.com/N0xCam/CV_Regina_Phalange"/> </h5>
        <img src="../assets/images/modal_1.png" alt="Mon CV">
      </div>
    </div>

    

    <div class="bloc-modale" v-if="revele">
      <div class="overlay" v-on:click="toggleModale"></div>
  
      <div class="modale card">
        <div v-on:click="toggleModale" class="btnCV">X</div>
        <h2>Mon espace commentare</h2>
        <h3> Date de création : 11/07/2024 </h3>
        <h4> JavaScript, Node.JS </h4>
        <h5> Consultez mon projet ! <link href="https://github.com/N0xCam/DevoirCommentaire"/> </h5>
        <img src="../assets/images/modal_3.png" alt="Dynamiser un espace commentaire">
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
    padding: 50px;
    position: fixed;
    top: 30%;
  }
  
  .btn-modale {
    position: absolute;
    top: 10px;
    right: 10px;
  }
  </style>