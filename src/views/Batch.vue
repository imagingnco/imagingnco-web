<template>
  <div>
    <div class="main">
      <h2 v-if="just">{{ just }}</h2>
      <div class="top_main">
        <PluginsManager
          class="v-step-4"
          ref="pluginsManager"
          :pluginManager="pluginManager"
          :defaultConfig="defaultConfig"
          :defaultPlugins="defaultPlugins"
        />
        <div id="center_main">
          <ImageUpload
            class="v-step-3"
            ref="imageUpload"
            @changeImage="changeImages($event)"
          />
        </div>
        <div id="process">
          <button class="v-step-5" v-on:click="processImages">
            process images
          </button>
          <ImagePreview class="v-step-6" :images="resultImages" />
        </div>
      </div>
      <div class="bottom_main"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import * as NProgress from "nprogress";
import { useToast } from "vue-toastification";
import PluginsManager from "../components/PluginsManager.vue";
import ImageUpload from "../components/ImageUpload.vue";
import ImagePreview from "../components/ImagePreview.vue";
import { PluginManager } from "../controllers/plugin_manager";
import { Image } from "../models/image";
import { processImages } from "../controllers/processor";
import { listPlugins } from "../controllers/storage";

export declare interface BatchData {
  pluginUrl: string;
  just: string | null;
  defaultConfig: [];
  defaultPlugins: string[];
  sourceImages: Image[];
  resultImages: Image[];
  pluginManager: PluginManager;
}

export default defineComponent({
  name: "Batch",
  components: {
    PluginsManager,
    ImageUpload,
    ImagePreview,
  },
  data(): BatchData {
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
    const imageUpload = ref(ImageUpload);
    const pluginsManager = ref(PluginsManager);
    return {
      imageUpload,
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
        "/plugins.json"
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
      this.sourceImages.push(files.file);
    },
    async processImages() {
      NProgress.configure({ parent: "#process" });
      NProgress.start();
      const toast = useToast();

      await processImages(
        this.sourceImages,
        this.resultImages,
        this.pluginManager.getPlugins(),
        {
          info: (message: string) => {
            toast.info(message);
          },
          success: (message: string) => {
            toast.success(message);
          },
        },
        NProgress.set
      );

      this.imageUpload.images = [];
      this.sourceImages = [];

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
.main h1 {
  text-transform: uppercase;
  font-family: "Amatic SC", cursive;
  font-size: 32pt;
}
.main hr {
  margin-top: 10px;
  border: none;
  border-top: 2px dotted blue;
  color: #fff;
  background-color: #fff;
  height: 2px;
  width: 100%;
}
.top_main {
  display: flex;
  justify-content: space-between;
}
.bottom_main {
  padding-top: 20px;
  padding-bottom: 0;
}
#center_main {
  margin-top: 10%;
}
#process button {
  margin-top: 40%;
  width: 350px;
  align-self: center;
  font-size: 20pt;
  text-transform: uppercase;
  padding: 12px;
  border-radius: 30px;
  border: none;
  box-shadow: 5px 5px 5px $shadow;
}
#process button:hover {
  transform: scale(1.05);
}

.plus {
  position: absolute;
  top: -25px;
  left: calc(50% - 20px);

  display: inline-block;
  width: 50px;
  height: 50px;

  background: linear-gradient(#fff, #fff), linear-gradient(#fff, #fff), blue;
  background-position: center;
  background-size: 50% 2px, 2px 50%; /*thickness = 2px, length = 50% (25px)*/
  background-repeat: no-repeat;
}
.radius {
  border-radius: 50%;
}
.plus:hover {
  transform: scale(1.1);
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
