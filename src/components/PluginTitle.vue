<template>
  <div class="content">
    <div id="icon">
      <slot />
    </div>
    <div>
      {{ title }}
    </div>
  </div>
</template>
<script lang="ts">
export default {
  props: {
    title: {
      type: [String],
    },
  },
};
</script>
<style scoped lang="scss">
.content {
  margin-left: 10px;
  float: left;
  display: flex;

  font-family: "Quicksand";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  color: #ffffff;
}
#icon {
  margin: 8px;
  margin-top: 0;
  width: 13px;
  height: 13px;
}
</style>
