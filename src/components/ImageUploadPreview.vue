<template>
  <div class="image-preview">
    <FileUpload
      :multiple="true"
      :drop="true"
      :drop-directory="true"
      extensions="gif,jpg,jpeg,png,webp"
      accept="image/png,image/gif,image/jpeg,image/webp"
      @input-filter="inputFilter"
      @input-file="inputFile"
      ref="upload"
      class="file-upload"
    >
      <div class="upload-container">
        <img src="../assets/add_image.svg" />
        <div v-if="imgs.length < 1" class="upload-text">
          Drop files here
          <div id="or-line">
            <div class="line" />
            or
            <div class="line" />
          </div>
        </div>
        <div v-if="imgs.length < 1" id="upload-button">Select Files...</div>
      </div>
    </FileUpload>

    <div v-if="imgs.length > 0" id="save">
      <download-button
        :onClick="downloadZip"
        :filetype="filetype"
        @update:filetype="filetype = $event"
      />
    </div>
    <br />
    <div v-if="imgs.length > 0" class="image-container">
      <div
        v-for="(src, index) in imgs"
        :key="index"
        class="pic"
        @click="() => showImg(index)"
      >
        <img :src="src" />
      </div>
    </div>
    <vue-easy-lightbox
      escDisabled
      moveDisabled
      :visible="visible"
      :imgs="imgs"
      :index="index"
      @hide="handleHide"
    ></vue-easy-lightbox>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import FileUpload from "vue-upload-component";
import DownloadButton from "./DownloadButton.vue";
import VueEasyLightbox from "vue-easy-lightbox";
import { saveAs } from "file-saver";
import JSZip from "jszip";
import { useToast } from "vue-toastification";
import { convert } from "@lenna-proj/lenna-cli";
import { ImageSource } from "../models/image";

declare interface FileOption {
  text: string;
  value: string;
}

declare interface ImageUploadPreviewData {
  files: Object[];
  imgs: string[];
  visible: boolean;
  index: number;
  filetype: string;
  options: Array<FileOption>;
}

export default defineComponent({
  components: {
    FileUpload,
    DownloadButton,
    VueEasyLightbox,
  },
  props: {
    images: {
      type: Array as () => Array<ImageSource>,
      required: true,
    },
  },
  data(): ImageUploadPreviewData {
    return {
      files: [],
      imgs: [],
      visible: false,
      index: 0,
      filetype: "png",
      options: [
        { text: "png", value: "png" },
        { text: "jpg", value: "jpg" },
        { text: "bmp", value: "bmp" },
        { text: "ico", value: "ico" },
        { text: "gif", value: "gif" },
      ],
    };
  },
  methods: {
    // eslint-disable-next-line no-unused-vars
    inputFile(newFile: any, oldFile: any, prevent: any) {
      //this.images.push(newFile.url);
      this.imgs = [newFile.url];
      this.$emit("changeImage", newFile);
    },
    inputFilter(newFile: any, oldFile: any, prevent: any) {
      if (newFile && !oldFile) {
        if (!/\.(gif|jpg|jpeg|png|webp)$/i.test(newFile.name)) {
          alert("Your choice is not a picture");
          return prevent();
        }
      }
      if (newFile && (!oldFile || newFile.file !== oldFile.file)) {
        newFile.url = "";
        let URL = window.URL || window.webkitURL;
        if (URL && URL.createObjectURL) {
          newFile.url = URL.createObjectURL(newFile.file);
        }
      }
    },
    createObjectURL(image: ImageSource) {
      return URL.createObjectURL(image);
    },
    async safeImage(file: any, format: string) {
      let data = await file
        .arrayBuffer()
        .then((image: any) => new Uint8Array(image));
      return convert(data, format);
    },
    async downloadZip() {
      let zip = new JSZip();
      const toast = useToast();
      const imageCount = this.images.length;
      if (imageCount < 1) {
        return;
      }
      let compressedCount = 0;
      toast.info(`compressing of ${this.images.length} images started`);
      let promises = this.images.map((image: ImageSource) => {
        let type = `image/${this.filetype}`;

        return this.safeImage(image, this.filetype).then((compressed_image) => {
          let file = new File([compressed_image], image.name, { type });
          compressedCount++;
          toast.success(
            `compressed ${image.name} ${compressedCount} / ${imageCount} images`
          );
          return zip.file(
            `${image.name.replace(/(\.[^/.]+)+$/, "")}.${this.filetype}`,
            file
          );
        });
      });
      await Promise.all(promises);
      zip.generateAsync({ type: "blob" }).then(function (blob) {
        saveAs(blob, "images.zip");
      });
    },
    show() {
      this.visible = true;
    },
    showImg(index: any) {
      this.index = index;
      this.visible = true;
    },
    handleHide() {
      this.visible = false;
    },
  },
  watch: {
    $props: {
      handler() {
        this.imgs = [];
        this.index = 0;
        this.images.forEach((image) => {
          this.imgs = [this.createObjectURL(image)];
        });
      },
      deep: true,
      immediate: true,
    },
  },
});
</script>
<style scoped lang="scss">
@import "@/styles/_variables.scss";
.image-upload {
  margin: 10px;
  width: 300px;
  height: 350px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.file-upload {
  font-size: 14pt;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.file-upload:hover {
  transform: scale(1.05);
}
.upload-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.upload-container img {
  height: 83px;
  width: 83px;
  padding: 5px;
}
.upload-text {
  display: flex;
  flex-direction: column;
  align-items: center;

  font-family: "Quicksand";
  font-size: 27px;
  font-style: normal;
  font-weight: 500;
  line-height: 34px;
  letter-spacing: 0em;
  text-align: center;
  color: #5C5C5C;
}
#upload-button {
  margin: 20px;
  padding: 8px;
  width: 151px;
  background: #ffffff;
  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 5px;

  font-family: "Quicksand";
  font-style: normal;
  font-weight: 500;
  font-size: 17px;
  line-height: 21px;
  color: #000000;
  text-align: center;
}
.image-preview {
  margin: 10px;
  width: 100%;
  align-items: center;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.image-container img {
  max-width: 100%;
  max-height: 100%;
}
.image-container {
  height: 600px;
  display: flex;
  flex-wrap: wrap;
  overflow-y: auto;
}
#save {
  position: absolute;
  top: 16px;
  left: 600px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}
#save:hover {
  transform: scale(1.05);
}
#or-line {
  margin: 10px;
  display: flex;
  font-size: 18px;
}
.line {
  margin: auto;
  margin-left: 10px;
  margin-right: 10px;
  width: 34px;
  height: 0px;
  border: 2px solid #6c6c6c;
}
</style>
