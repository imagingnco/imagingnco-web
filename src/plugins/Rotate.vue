<template>
  <div class="plugin-config">
    <select v-model="selected" @change="updateConfig()">
      <option
        v-for="option in options"
        :value="option.value"
        :key="option.text"
      >
        {{ option.text }} Clockwise
      </option>
    </select>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import VueSlider from "vue-slider-component";
import "vue-slider-component/theme/antd.css";

export interface Configs {
  [key: string]: any;
}

declare interface PluginConfigData {
  options: any;
  selected: String;
}

export default defineComponent({
  name: "RotateConfig",
  props: {
    defaultConfig: Object,
  },
  components: {
    VueSlider,
  },
  data(): PluginConfigData {
    return {
      selected: "90",
      options: [
        { text: "90°", value: "90" },
        { text: "180°", value: "180" },
        { text: "270°", value: "270" },
      ],
    };
  },
  methods: {
    async updateConfig() {
      let config = {
        theta: 0.0,
      };
      if (this.selected === "90") {
        config.theta = 90.0;
      } else if (this.selected === "180") {
        config.theta = 180.0;
      } else if (this.selected === "270") {
        config.theta = 270.0;
      }
      this.$emit("changeConfig", config);
    },
  },
  created() {
    this.updateConfig();
  },
});
</script>

<style scoped>
.plugin-config {
  margin: 5px;
  padding-bottom: 10px;
}
</style>
