<template>
  <div>
    <div class="main">
      <h1>Convert images online<br/> without upload of your data</h1>
      <Mountains />
      <router-link class="process-image-button" to="/process">Process Image</router-link>
      <AboutProject />
      <HowToConvert />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Mountains from "../components/Mountains.vue";
import AboutProject from "../components/AboutProject.vue";
import HowToConvert from "../components/HowToConvert.vue";

export default defineComponent({
  name: "Home",
  components: {
    Mountains,
    AboutProject,
    HowToConvert,
  },
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
  background-image: url("../assets/mainbg.svg");
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
  justify-content: center;
}
.bottom_main {
  padding-top: 20px;
  padding-bottom: 0;
}

.process-image-button {
  display: inline-block;
  text-decoration: inherit;
  margin: 40px;
  width: 248px;
  padding: 25px;

  background: #d8c6c6;
  border-radius: 11px;

  font-family: "Quicksand";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 30px;

  color: #000000;
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
