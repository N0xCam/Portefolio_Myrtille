<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import TheHeader from "./src/"
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
    padding-left: 20em;
    font-family: "caviar", sans-serif;
  }

</style>
