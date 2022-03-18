<template>
  <p id="title">About the project</p>
  <div id="container">
    <div id="tile1"></div>
    <div id="tile2">
      Imaging &amp; Co. is a library for image processing algorithms. The web
      page allows to test and use them.
    </div>
  </div>
</template>
<script lang="ts">
import HowToTile from "./HowToTile.vue";
export default {
  components: {
    HowToTile,
  },
};
</script>
<style scoped lang="scss">
#title {
  font-family: "Quicksand";
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 45px;
  color: #000000;
}
#container {
  display: flex;
}
#tile1 {
  width: 561px;
  height: 374px;

  border-radius: 17px;
  background-image: url("~@/assets/about_project_tile1.jpg");
}
#tile2 {
  font-family: "Quicksand";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 30px;
  color: #000000;
  
  width: 557px;
  height: 346px;
  background: #f3dfe0;
  background-image: url("~@/assets/about_project_tile2.svg");
}
</style>
