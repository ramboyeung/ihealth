<template>
  <div class="container">
    <VHeader />
    <MainContent />
    <VFooter />
  </div>
</template>

<script>
import VHeader from "@/components/VHeader";
import VFooter from "@/components/VFooter";
import MainContent from "./main";
export default {
  name: "Layout",
  components: { VHeader, MainContent, VFooter }
};
</script>

<style lang="scss" scoped>
.container {
  min-width: 1200px;
}
</style>
