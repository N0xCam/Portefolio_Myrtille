<template>
 
<div id="home"></div>
      <nav>

        
             <a href="#home"><img src="../assets/images/Myrtille.png" alt="logo Myrtille" id="logo_Myrtille"></a>

             <ul>
                <li id="mypresentation">
                  <a href='#Presentation' style="text-decoration: none;"> Ma Présentation </a>
                </li>
             
                <li id="mycreations"> 
                  <a href='#Creations' style="text-decoration: none;"> Mes Créations </a>
                </li>
             
                <li id="myform"> 
                  <a href="#form" style="text-decoration: none;">Me Contacter </a>
                </li>

              </ul>
          
      </nav>


</template>

<style scoped>

#logo_Myrtille {
  width: 17em;
  height: 15em;
  padding-bottom: 2em;
  padding-left: 2em;
  padding-right: 3em;
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
  margin-top: 2em;
  
  
}

ul {
  width: 30em;
  height: 5em;
  margin-left: 1em;
  text-decoration: none;
  font-size: 2em;
  display: flex;
  justify-content: space-evenly;
  margin-top: 1.5em;  
  font-family: "caviar", sans-serif;
}


#mypresentation:hover {
  text-decoration: underline;
}

#mycreations:hover {
  text-decoration: underline;
}

#myform:hover {
  text-decoration: underline;
}

h1 {
  margin-top: -3em;
}


</style>