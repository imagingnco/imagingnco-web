<template>
  <div id="container">
    <span id="mountain1" />
    <div id="container-right">
      <span id="mountain2" />
      <span id="mountain3" />
    </div>
  </div>
</template>
<script lang="ts">
</script>
<style scoped lang="css">
#container {
  display: flex;
  align-items: center;
  justify-content: center;
}

#container-right {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}

#mountain1 {
  width: 480px;
  height: 320px;
  background: url("../assets/mountain1.jpg");
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 17px;
}

#mountain2 {
  margin: 5px;
  width: 224px;
  height: 150px;
  background: url("../assets/mountain2.jpg");
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 14px;
}

#mountain3 {
  margin: 5px;
  width: 224px;
  height: 150px;
  background: url("../assets/mountain3.jpg");
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 14px;
}
</style>
