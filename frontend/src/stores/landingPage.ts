import { ref } from "vue"
import { defineStore } from "pinia"

export const useLandingPageStore = defineStore("landingPage", () => {
  const hasExited = ref(false)
  function setHasExited() {
    hasExited.value = true
  }

  return { hasExited, setHasExited }
})
