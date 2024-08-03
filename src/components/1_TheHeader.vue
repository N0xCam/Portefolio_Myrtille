<script setup lang="ts">
</script>

<template>
  <TheHeader>

      <nav>

        
             <img src="../assets/images/Myrtille.png" alt="logo Myrtille" id="logo_Myrtille">

             <ul>
                <li>
                  <a href="My_presentation"> Ma Présentation </a>
                </li>
             
                <li> 
                  <a href="My_creations"> Mes Créations </a>
                </li>
             
                <li> 
                  <a href="contact_me">Me Contacter </a>
                </li>

              </ul>
          
      </nav>

  </TheHeader>
</template>

<style>

#logo_Myrtille {
  width: 13em;
  height: 10em;
  padding-bottom: 2em;
  padding-left: 5em;
  margin-top: -2em;
  display: flex;

};

* {
  display:flex;
  background-color: rgb(253, 202, 253);
  height: 20em;
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  font-weight: normal;
  align-items: center;

}

nav {
  display: flex;
  flex-direction: row;
  margin-top: 1.5em;
}

ul {
  width: 30em;
  height: 5em;
  margin-left: 5em;
  font-family: "caviar", sans-serif;
  font-size: 1.5em;
  display: flex;
  justify-content: space-evenly;
  
}


</style>