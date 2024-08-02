<script setup lang="ts">

</script>

<template>
  
    <ThePresentation>

        <div id="Name">
            <img src="../assets/images/1687551056196.jpg" alt="Myrtille" id="Me">
            <h1> Myrtille</h1>
            <h2> Développeuse Web</h2>
        </div>
        <div id="Text">
            <p>
              Après une expérience réussie de commerciale, je me challenge dans une reconversion en tant que développeuse web. Je souhaite mettre toutes ces compétences au service de votre entreprise pour enrichir votre visibilité.
            </p>
        </div>

    </ThePresentation>

</template>

<style scoped>

#Me {
width: 10em;
height: 10em;
object-fit: cover;
border-radius: 50%;
box-shadow: 0 0  30px white;
margin-top: 50px;
margin-left: 20em;
margin-right: 100px;
  }

h1 {
  font-family: 'milestone',sans-serif;
  font-size: 3em;
  flex-direction: row;
  padding-right: 2em;
  padding-left: 12em;
  border-top-style: solid;
  border-top-width: 0px;
  margin-top: -4em;
  
};

h2 {
  margin-top: 0.5em;
  font-family: "milestone",sans-serif;
  font-size: 3em;
  padding-right: 2em;
  padding-left: 12em;
};

#ThePresentation {
  display: flex;
  border-color: brown;
}

p{
  font-family: "magnisia", sans-serif;
  font-size: 1.5em;
}


</style>
