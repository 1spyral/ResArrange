<script setup lang="ts">
import { onMounted, ref } from "vue"
import { usePDFStore } from "@/stores/pdf.ts"

const { pageNum } = defineProps<{
  pageNum: number
}>()

const canvasRef = ref<HTMLCanvasElement | null>(null)

const pdfStore = usePDFStore()

onMounted(async () => {
  const page = await pdfStore.getPage(pageNum)
  if (!page) {
    return
  }
  const canvas = canvasRef.value!
  const context = canvas.getContext("2d") as CanvasRenderingContext2D
  // Get viewport at full scale
  const viewport = page.getViewport({ scale: 1.0 })

  // Adjust scale to fit container width
  const container = canvas.parentElement!
  const scale = container.clientWidth / viewport.width
  const scaledViewport = page.getViewport({ scale })

  // Set canvas dimensions
  canvas.width = scaledViewport.width
  canvas.height = scaledViewport.height

  // Render the page
  await page.render({ canvasContext: context, viewport: scaledViewport }).promise
})
</script>

<template>
  <canvas ref="canvasRef" />
</template>

<style scoped>
canvas {
  display: block;
}
</style>
