<template>
  <div class="image-upload">
    <FileUpload
      :multiple="true"
      :drop="true"
      :drop-directory="true"
      extensions="gif,jpg,jpeg,png,webp"
      accept="image/png,image/gif,image/jpeg,image/webp"
      v-model="files"
      @input-filter="inputFilter"
      @input-file="inputFile"
      ref="upload"
      class="file-upload"
    >
      <div class="upload-container">
        <img src="../assets/add_image.svg" />
        <div class="upload-text">Drop files here<br />or</div>
        <div id="upload-button">Select Files...</div>
      </div>
    </FileUpload>
    <div v-if="images.length > 0" class="image-container">
      <div
        v-for="(src, index) in images"
        :key="index"
        class="pic"
        @click="() => showImg(index)"
      >
        <img height="140" :src="src" />
      </div>
      <vue-easy-lightbox
        escDisabled
        moveDisabled
        :visible="visible"
        :imgs="images"
        :index="index"
        @hide="handleHide"
      ></vue-easy-lightbox>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import FileUpload from "vue-upload-component";
import VueEasyLightbox from "vue-easy-lightbox";

export declare interface ImageUploadData {
  files: Object[];
  images: Object[];
  visible: boolean;
  index: number;
}

export default defineComponent({
  components: {
    FileUpload,
    VueEasyLightbox,
  },
  data(): ImageUploadData {
    return {
      files: [],
      images: [],
      visible: false,
      index: 0,
    };
  },
  methods: {
    // eslint-disable-next-line no-unused-vars
    inputFile(newFile: any, oldFile: any, prevent: any) {
      this.images.push(newFile.url);
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
    showImg(index: number) {
      this.index = index;
      this.visible = true;
    },
    handleHide() {
      this.visible = false;
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
  background-color: $background_color;
  border: 2px solid black;
  border-radius: 10px;
  box-shadow: 10px 5px 5px $shadow;
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
.image-container {
  height: 200px;
  display: flex;
  flex-wrap: wrap;
  overflow-y: auto;
}

.upload-container {
  align-content: space-around;
}

.upload-text {
  width: 228px;
  height: 95px;
  font-family: "Quicksand";
  font-style: normal;
  font-weight: 500;
  font-size: 27px;
  line-height: 34px;
  text-align: center;
  color: #5c5c5c;
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
</style>
