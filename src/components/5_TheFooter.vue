<template>

<div id="footer"></div>

<div id="social_medias">
    <div id="GitHub">
        <a href="https://github.com/N0xCam" target="_blank"><img src="../assets/images/github-mark.png" alt="GitHub" style="height: 7em"></a>
    </div>
    <div id="LinkedIn">
        <a href="https://fr.linkedin.com/" target="_blank"> <img src="../assets/images/linkedin.png" alt="GitHub" style="height: 7em"></a>
    </div>
    <div id="X">
        <a href="https://x.com/?lang=fr" target="_blank"><img src="../assets/images/twitter.png" alt="X" style="height: 7em"></a>
    </div>
    

</div>

<div id="legal_mentions">
    <small> IE Myrtille - Brandgatan 12, 457 40 Fjällbacka, Suède <br> </small>
    <small> Dernière modification le 03 août 2024</small>
</div>
</template>

<style scoped>

#social_medias {
    height: 20em;
    width: 10em;
    display: flex;
    margin-top: 3em;
    justify-content: space-around;
    margin-left: 27em;
    margin-top: 5em;
};

#social_medias:hover {
    cursor: pointer;
    opacity: 0.4;
}



#Github:hover {
    opacity: 0.4;
};

#LinkedIn {
    height: 2em;
    width: 20%;
    margin-left: 2em;
    margin-right: 2em;
};

#X {
height: 2em;
width: 2em;
padding-left: 2em;
};

small {
    display: flex;
    flex-direction: row;
    
}

</style>