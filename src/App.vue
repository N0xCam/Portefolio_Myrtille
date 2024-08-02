<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header>
    
      <nav>
        <RouterLink to="/">Présentation</RouterLink>
        <RouterLink to="/about">Mes Créations</RouterLink>
        <RouterLink to="/about">Me Contacter</RouterLink>

      </nav>

  </header>

  <RouterView />
</template>

<style scoped>

  nav {
    display: flex;
    flex-direction: row;
    padding-left: 10em;
    font-family: "caviar", sans-serif;
    font-size: 1.2em;
    justify-content: space-around;
    padding-top: 3em;
    color: red;
  };

 
  
</style>
