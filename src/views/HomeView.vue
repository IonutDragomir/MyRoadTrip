<template>
  <div class="home">
    <div>
      <img  src="../assets/skiathos-views-homebg.jpg" alt="skiathos-views-homebg" >
    </div>
  </div>
</template>
<script>
export default {
  name: "HomeView",
};
</script>
<style scoped>
.home {

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    z-index: 1;
    height: 100vh;
    content: " ";
    background-color: rgba(24, 235, 238, 0.2);
  }
}

img {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: -1;
  height: 100vh;
}
</style>
