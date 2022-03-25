<template>
  <div class="plugin-config" v-if="config">
    <div v-for="c in config" :key="c.key">
      <div class="parameter">
        <label>{{ c.key }}: </label>
        <div id="slider">
          <vue-slider
            :interval="1"
            :min="0"
            :max="100"
            v-model="c.value"
            @change="updateConfig()"
            v-bind:id="c.key"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import VueSlider from "vue-slider-component";
import "vue-slider-component/theme/antd.css";

export interface Configs {
  [key: string]: any;
}

interface Config {
  key: string;
  value: any;
}

declare interface PluginConfigData {
  config: Config[];
}

export default defineComponent({
  name: "CannyConfig",
  props: {
    defaultConfig: Object,
  },
  components: {
    VueSlider,
  },
  data(): PluginConfigData {
    return {
      config: [],
    };
  },
  methods: {
    async updateConfig() {
      let config: Configs = {};
      for (let c of this.config) {
        config[c.key] = c.value;
      }
      this.$emit("changeConfig", config);
    },
  },
  created() {
    for (let key in this.defaultConfig) {
      let config = { key: key, value: this.defaultConfig[key] };
      this.config.push(config);
    }
    this.updateConfig();
  },
});
</script>

<style scoped>
.plugin-config {
  margin: 5px;
}
.parameter {
  padding-bottom: 10px;
}
#slider {
  margin: 0 auto;
  width: 80px;
}
</style>
