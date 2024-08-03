<template>
  <div class="wrapper">
    <flicking ref="flicking0" :options="{ bounce: 30 }" :plugins="plugins">
      <div class="flicking-panel full has-background-primary">
        <img class="panel-image" src="../assets/images/modal_1.png" />
      </div>
      <div class="flicking-panel full has-background-primary">
        <img class="panel-image" src="../assets/images/modal_2.png" />
      </div>
      <div class="flicking-panel full has-background-primary">
        <img class="panel-image" src="../assets/images/modal_3.png" />
      </div>
     
    </flicking>
    <flicking ref="flicking1" :options="{ bound: true, bounce: 30, moveType: 'freeScroll' }">
      <div class="flicking-panel thumb has-background-primary">
        <img class="thumb-image" src="../assets/images/modal_1.png" />
      </div>
      <div class="flicking-panel thumb has-background-primary">
        <img class="thumb-image" src="../assets/images/modal_2.png" />
      </div>
      <div class="flicking-panel thumb has-background-primary">
        <img class="thumb-image" src="../assets/images/modal_3.png" />
      </div>
     
    </flicking>
  </div>
</template>
<script>
import { Sync } from "@egjs/flicking-plugins";

export default {
  data() {
    return {
      plugins: []
    }
  },
  mounted() {
    this.plugins = [new Sync({
      type: "index",
      synchronizedFlickingOptions: [
        {
          flicking: this.$refs.flicking0,
          isSlidable: true
        },
        {
          flicking: this.$refs.flicking1,
          isClickable: true,
          activeClass: "active"
        }
      ]
    })];
  }
}
</script>