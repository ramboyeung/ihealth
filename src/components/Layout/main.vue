<template>
  <div class="main-container">
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "Main"
};
</script>

<style scoped>
.main-container {
  height: 100%;
  min-width: 1200px;
  position: relative;
}
</style>
