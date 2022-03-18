<template>
  <div class="howtotile">
    <p id="text">{{text}}</p>
  </div>
</template>
<script lang="ts">
export default {
  props: {
    text: {
      type: [String],
    },
  },
};
</script>
<style scoped lang="scss">
.howtotile {
  width: 289px;
  height: 342px;
  margin: 30px;
  padding: 30px;

  background: #c4c4c4;
  border-radius: 12px;
}

#text {
  font-family: "Quicksand";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 30px;

  color: #000000;
}
</style>
