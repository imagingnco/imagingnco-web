<template>
  <div>
    <div class="main">
      <h1>Convert images online without upload of your data</h1>
      
      <AboutProject />
      <HowToConvert />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import AboutProject from "../components/AboutProject.vue";
import HowToConvert from "../components/HowToConvert.vue";

export default defineComponent({
  name: "Home",
  components: {
    AboutProject,
    HowToConvert,
  }
});
</script>
<style scoped lang="scss">
@import "@/styles/_variables.scss";
@import url("https://fonts.googleapis.com/css2?family=Amatic+SC&display=swap");

.main {
  background-color: $body_background;
  padding: 150px;
  padding-top: 120px;
  text-align: center;
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
  justify-content: center;
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
