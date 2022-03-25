<template>
  <div class="content">
    <div class="plugin" v-if="plugin">
      <div class="head">
        <div><img id="drag-icon" src="../assets/drag.png" /></div>
        <span />
        <plugin-title :title="plugin.name()">
          <img v-if="plugin.name() == 'blur'" src="../assets/blur.svg" />
          <img
            v-if="plugin.name() == 'dramatic'"
            src="../assets/dramatic.svg"
          />
          <img v-if="plugin.name() == 'sharpen'" src="../assets/sharpen.svg" />
          <img v-if="plugin.name() == 'sepia'" src="../assets/sepia.svg" />
        </plugin-title>
      </div>
      <div class="icons">
        <Checkbox
          id="checkbox"
          :checked="enabled"
          @update:checked="updateEnabled($event)"
        />
      </div>
    </div>
    <div v-if="enabled">
      <div v-if="plugin.name() == 'blur'">
        <Blur
          :key="pluginKey"
          :defaultConfig="config"
          @changeConfig="updateConfig($event)"
        />
      </div>
    </div>
    <div id="line"></div>
  </div>
</template>

<script lang="ts">
import { shallowRef, Ref, defineComponent } from "vue";
import Blur from "./Blur.vue";
import { PluginModule } from "../models/plugin_module";
import { Config } from "../models/config";
import Checkbox from "../components/Checkbox.vue";
import PluginTitle from "../components/PluginTitle.vue";
import Icon from "../components/Icon.vue";
import {
  loadConfig,
  loadConfigFromParams,
  saveConfig,
} from "@/controllers/storage";

declare interface PluginData {
  ui: Ref;
  icon: Ref;
  processor: any;
  enabled: boolean;
  keyCounter: number;
  pluginKey: string;
  config: Object;
}

export default defineComponent({
  name: "Plugin",
  props: {
    name: String,
    plugin: Object as () => PluginModule,
    url: String,
    defaultConfig: Object as () => Config[],
  },
  components: {
    Checkbox,
    Icon,
    Blur,
    PluginTitle,
  },
  data(): PluginData {
    return {
      ui: shallowRef(null),
      icon: shallowRef(null),
      processor: null,
      enabled: false,
      keyCounter: 0,
      pluginKey: "",
      config: {},
    };
  },
  methods: {
    async loadDefaultConfig() {
      this.plugin?.defaultConfig().then((defaultConfig: any) => {
        if (this.defaultConfig && this.defaultConfig.length > 0) {
          const { enabled, config } = loadConfigFromParams(
            {
              name: this.name || "",
              enabled: true,
              config: defaultConfig,
            },
            this.defaultConfig
          );
          this.config = config;
          this.enabled = enabled || false;
        } else {
          const { enabled, config } = loadConfig({
            name: this.name || "",
            enabled: false,
            config: defaultConfig,
          });
          this.config = config;
          this.enabled = enabled || false;
        }
      });
    },
    async loadUI() {
      if (this.plugin?.ui && this.url) {
        // eslint-disable-next-line no-undef
        System.import(this.url)
          .then((module: any) => {
            module.get("./Widget").then((widget: Function) => {
              this.ui = widget().default;
            });
          })
          .catch((e: any) => console.log(e));
      }
      if (this.plugin?.icon) {
        this.icon = this.plugin.icon();
      }
    },
    async updateConfig(config: Object) {
      saveConfig({
        name: this.name || "",
        enabled: this.enabled,
        config: config,
      });
      this.$emit("changeConfig", config);
    },
    async updateEnabled(enabled: boolean) {
      this.enabled = enabled;
      saveConfig({
        name: this.name || "",
        enabled: this.enabled,
        config: this.config,
      });
      this.$emit("changeEnabled", enabled);
    },
  },
  created() {
    console.log(this.name);
    this.loadUI();
    this.loadDefaultConfig();
  },
  watch: {
    defaultConfig: {
      handler: function () {
        this.keyCounter += 1;
        this.pluginKey = (this.name || "") + this.keyCounter;
      },
    },
  },
});
</script>
<style scoped lang="scss">
@import "@/styles/_variables.scss";
.content {
  position: relative;
}
.head {
  width: 150px;
  display: flex;
}
#drag-icon {
  width: 12px;
  height: 16px;
  margin: 3px;
}
.icons {
  width: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
#checkbox {
  transform: scale(0.5);
}
.plugin {
  min-width: 160px;
  height: 50px;
  background: #5a5a5a;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-transform: uppercase;
}
.plugin h2 {
  margin: 5px;
  font-family: "Quicksand";
  font-style: normal;
  font-weight: 500;
  font-size: 17px;
  line-height: 21px;
  color: #ffffff;
}
#line {
  position: absolute;
  width: 121px;
  height: 0px;
  left: 50px;
  bottom: 3px;
  border: 1px solid #8a8a8a;
}
</style>
