<template>
  <div class="download-button">
    <img v-on:click="onClick" src="../assets/download.svg" />
    <div id="text" v-on:click="onClick">Download</div>
    <select v-model="filetype">
      <option
        v-for="option in options"
        :value="option.value"
        :key="option.text"
      >
        {{ option.text }}
      </option>
    </select>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent } from "vue";
export default defineComponent({
  name: "DownloadButton",
  props: {
    onClick: {
      type: Function,
      required: true,
    },
    filetype: {
      type: String,
      required: true,
    },
  },
  emits: ["update:filetype"],
  setup(props, { emit }) {
    const filetype = computed({
      get: () => props.filetype,
      set: (value) => emit("update:filetype", value),
    });

    return {
      filetype,
    };
  },
  data(): any {
    return {
      options: [
        { text: "png", value: "png" },
        { text: "jpg", value: "jpg" },
        { text: "bmp", value: "bmp" },
        { text: "ico", value: "ico" },
        { text: "gif", value: "gif" },
      ],
    };
  },
});
</script>
<style scoped lang="scss">
.download-button {
  padding: 0px 10px;
  display: flex;
  cursor: pointer;
  height: 40px;
  width: 220px;
  border-radius: 12px;
  background: #cca7bf;
}
.download-button img {
  margin: auto 10px;
  height: 25px;
  width: 24px;
}
#text {
  margin: auto 5px;
  font-family: "Quicksand";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  color: #ffffff;
}
.download-button select {
  margin: auto 10px;
  height: 30px;
  min-width: 50px;
  color: black;
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  cursor: pointer;
  border: 1px solid #a5a5a5;
  border-radius: 0px;
  outline: none;
  background-color: white;
  transform: scale(0.9);
}
</style>
