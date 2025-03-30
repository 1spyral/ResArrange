<script setup lang="ts">
import SideBar from "@/components/SideBar.vue"
import Editor from "@/components/Editor.vue"
import PDFViewer from "@/components/PDFViewer.vue"
</script>

<template>
  <div class="main">
    <SideBar />
    <Editor />
    <PDFViewer />
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
