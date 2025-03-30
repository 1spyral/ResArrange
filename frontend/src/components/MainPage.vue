<script setup lang="ts">
import SideBar from "@/components/SideBar.vue"
import Editor from "@/components/Editor.vue"
import PDFRenderer from "@/components/PDFRenderer.vue"
</script>

<template>
  <div class="main">
    <SideBar />
    <Editor />
    <PDFRenderer />
  </div>
</template>

<style scoped>
.main {
  background: var(--paper-yellow);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 100vh;
}
</style>
