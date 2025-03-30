import { defineStore } from "pinia"
import type { PDFDocumentProxy } from "pdfjs-dist/types/src/display/api"
import { type PDFPageProxy } from "pdfjs-dist"
import * as pdfjs from "pdfjs-dist"
import { ref } from "vue"

const SAMPLE_URL = "/sample.pdf"

export const usePDFStore = defineStore("pdf", () => {
  let pdf: PDFDocumentProxy | null = null
  const reload = ref(0)

  const loadPDF = async (url: string) => {
    const loadingTask = pdfjs.getDocument(url)
    pdf = await loadingTask.promise
    reload.value++
  }

  loadPDF(SAMPLE_URL).then(() => {
    console.log("Sample PDF loaded")
  })

  const getPage = async (pageNum: number): Promise<PDFPageProxy | null> => {
    return (await pdf?.getPage(pageNum)) ?? null
  }

  return { reload, loadPDF, getPage }
})
