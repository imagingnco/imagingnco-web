<template>
  <p id="title">How to convert images</p>
  <div id="tiles">
  <HowToTile text="1. Upload the image" />
  <HowToTile text="2. Enable the plugins" />
  <HowToTile
    text="3. You can order the plugins by dragging and dropping them"
  />
  <HowToTile text="4. Press the ‘Process button’." />
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
#tiles {
  display: flex;
}
</style>
