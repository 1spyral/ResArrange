<script setup lang="ts">
import SideBar from "@/components/SideBar.vue"
</script>

<template>
  <div class="main">
    <SideBar/>

  </div>
</template>

<style scoped>
.main {
  background: var(--offwhite);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 100vh;
}
</style>
