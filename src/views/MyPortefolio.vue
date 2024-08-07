<script setup>
import TheHeader from '../components/1_TheHeader.vue'
import ThePresentation from '../components/2_ThePresentation.vue'
import Contenu from "../components/MonContenu.vue";
import TheForm from '../components/4_TheForm.vue'
import TheFooter from '../components/5_TheFooter.vue'
</script>

<template>
  <main>
    <TheHeader />
    <ThePresentation/>
    <Contenu/>
    <TheForm/>
    <TheFooter/>
  </main>
</template>
