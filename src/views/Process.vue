<template>
  <div>
    <div class="main">
      <div id="process" class="top_main">
        <PluginsManager
          class="v-step-4"
          ref="pluginsManager"
          :pluginManager="pluginManager"
          :defaultConfig="defaultConfig"
          :defaultPlugins="defaultPlugins"
          @change="processImages()"
        />
        <ImageUploadPreview
          :images="resultImages"
          @changeImage="changeImages($event)"
        />
      </div>
      <div class="bottom_main">
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import * as NProgress from "nprogress";
import { Slide } from "vue3-burger-menu";
import { useToast } from "vue-toastification";
import PluginsManager from "../components/PluginsManager.vue";
import ImageUploadPreview from "../components/ImageUploadPreview.vue";
import ConfigComp from "../components/ConfigComp.vue";
import Help from "../components/Help.vue";
import { PluginManager } from "../controllers/plugin_manager";
import { Image, ImageSource } from "../models/image";
import { processImages } from "../controllers/processor";
import { listPlugins } from "../controllers/storage";

export declare interface HomeData {
  pluginUrl: string;
  just: string | null;
  defaultConfig: [];
  defaultPlugins: string[];
  sourceImages: Image[];
  resultImages: ImageSource[];
  pluginManager: PluginManager;
}

export default defineComponent({
  name: "Process",
  components: {
    Slide,
    PluginsManager,
    ImageUploadPreview,
    ConfigComp,
    Help,
  },
  data(): HomeData {
    return {
      pluginUrl: "",
      just: null,
      defaultConfig: [],
      defaultPlugins: [],
      sourceImages: [],
      resultImages: [],
      pluginManager: new PluginManager(""),
    };
  },
  setup: () => {
    const pluginsManager = ref(PluginsManager);
    return {
      pluginsManager,
    };
  },
  created() {
    if (this.$route.query["config"]) {
      this.defaultConfig = JSON.parse(
        // eslint-disable-next-line no-undef
        Buffer.from(this.$route.query["config"].toString(), "base64").toString(
          "binary"
        )
      );
      console.log(this.defaultConfig);
    }
    if (this.$route.query.plugin) {
      this.defaultPlugins = [this.$route.query.plugin.toString()];
    }
    if (this.$route.query.just) {
      this.pluginManager.filter = this.$route.query.just.toString();
      this.just = this.$route.query.just.toString();
    }
    this.loadDefaultPluginsMap();
    this.loadDefaultPluginJson();
    this.loadAddedPlugins();
  },
  methods: {
    loadPlugin(pluginUrl: string) {
      console.log("loaded plugin: ", pluginUrl);
      this.pluginManager.importPlugin(pluginUrl, pluginUrl);
    },

    loadDefaultPluginsMap() {
      this.pluginManager.importPluginMap(
        "https://lenna.app/lenna-plugins/importmap.json"
      );
    },
    loadDefaultPluginJson() {
      this.pluginManager.importPluginsJson(
        "https://lenna.app/lenna-plugins/plugins.json"
      );
    },
    loadAddedPlugins() {
      listPlugins().forEach((plugin) => {
        this.pluginManager.importPlugin(plugin, plugin);
      });
    },
    onMorePlugins() {
      window.location.replace("/marketplace");
    },
    changeImages(files: any) {
      this.sourceImages = [files.file];
      this.processImages();
    },
    async processImages() {
      NProgress.configure({ parent: "#process" });
      NProgress.start();

      await processImages(
        this.sourceImages,
        this.resultImages,
        this.pluginManager.getPlugins(),
        {
          info: (message: string) => {},
          success: (message: string) => {},
        },
        NProgress.set
      );
      NProgress.done();
      NProgress.remove();
    },
  },
});
</script>
<style scoped lang="scss">
@import "@/styles/_variables.scss";
@import "//unpkg.com/nprogress@0.2.0/nprogress.css";
@import url("https://fonts.googleapis.com/css2?family=Amatic+SC&display=swap");

.main {
  background-color: $body_background;
  padding: 150px;
  padding-top: 120px;
  text-align: center;
  background-image: url("../assets/processbg.svg");
  background-size: contain;
  background-repeat: no-repeat;
}
.top_main {
  display: flex;
}
.bottom_main {
  padding-top: 20px;
  padding-bottom: 0;
}

@media screen and (max-width: 800px) {
  .main {
    margin-top: 120px;
    padding: 0;
  }
  #process button {
    width: 150px;
  }
}
</style>
