<template>
  <div class="Erreur">
    <h1>Erreur 404</h1>
    <img src="../assets/images/Error_404.png" alt="Error404">
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .Erreur {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}

h1 {
  margin-top: 3em;
  font-family: "reality", sans-serif;
  font-size: 10em;
  display: flex;
  align-content: center;
}

.Erreur {
  display: flex;
  flex-direction: column;
}
 
img {
  height: 100%;
  width: 80em;
}

</style>
