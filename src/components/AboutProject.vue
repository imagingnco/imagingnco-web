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
<style scoped lang="css">
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
  align-items: center;
  justify-content: center;
}
#tile1 {
  margin: 20px;
  width: 561px;
  height: 374px;

  border-radius: 17px;
  background-image: url("../assets/about_project_tile1.jpg");
  background-size: contain;
}
#tile2 {
  margin: 20px;
  padding: 110px 30px;
  font-family: "Quicksand";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 30px;
  color: #000000;

  width: 495px;
  height: 104px;
  background-image: url("../assets/about_project_tile2.svg");
  background-repeat: no-repeat;
  background-size: contain;
}
</style>
