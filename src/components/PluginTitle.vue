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
}
#icon {
  margin: 4px;
  width: 13px;
  height: 13px;
}
</style>
