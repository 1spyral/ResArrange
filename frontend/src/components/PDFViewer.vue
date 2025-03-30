<script setup lang="ts">
import PDFPage from "@/components/pdf/PDFPage.vue"
import { usePDFStore } from "@/stores/pdf.ts"
import { computed } from "vue"

const pdfStore = usePDFStore()

const reload = computed(() => pdfStore.reload)
</script>

<template>
  <div class="pdf-viewer">
    <PDFPage v-if="reload" :page-num="1" />
  </div>
</template>

<style scoped>
.pdf-viewer {
  flex: 1;
  background: var(--dark-background);
  height: 100%;
  overflow: auto;
  padding: 10px 10px 0 10px;
}
</style>
