<template>
  <div class="navbar">
    <div id="banner"><img src="@/assets/banner.png" /></div>
    <router-link to="/">Home</router-link>
    <router-link to="/batch">Process Image</router-link>
    <router-link to="/about">Contact us</router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Navbar",
});
</script>
<style scoped lang="scss">
@import "@/styles/_variables.scss";

$navbar_padding: 20px;

.navbar {
  padding: 0px $navbar_padding;
  position: fixed;
  top: 0;
  width: calc(100% - 2 * #{$navbar_padding});
  height: 66px;
  margin: 0;
  overflow: hidden;
  background-color: $nav_background;
  justify-content: flex-end;
  display: flex;
  color: $text_color;
  text-transform: uppercase;
}

.navbar a {
  display: block;
  color: $text_color;
  text-align: center;
  margin: 18px 10px;
  text-decoration: none;

  font-family: "Quicksand";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;

  color: #ffffff;
}

/*
.navbar a:hover {
  background-color: $primary_color;
}
.navbar .router-link-active {
  color: white;
  background-color: $primary_color;
}

.navbar a:active {
  background-color: $primary_color;
  transform: translateY(8px);
  opacity: 0.5;
}
*/

#banner {
  position: absolute;
  top: 10px;
  left: 2%;
  padding: 10px;
}

#banner img {
  max-height: 46px;
}

@media screen and (max-width: 800px) {
  #banner {
    left: 10px;
    top: 40px;
  }
  #banner img {
    display: none;
  }
  #banner::before {
    background-image: url("https://lenna.app/logo.png");
    background-size: 30px 30px;
    width: 30px;
    height: 30px;
    display: inline-block;
    content: "";
  }
}
</style>
