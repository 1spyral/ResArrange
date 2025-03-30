<script setup lang="ts">
import { useLandingPageStore } from "@/stores/landingPage"
import LandingPage from "@/components/LandingPage.vue"
import { computed } from "vue"
import MainPage from "@/components/MainPage.vue"

const landingPageStore = useLandingPageStore()

const hasExited = computed(() => landingPageStore.hasExited)
</script>

<template>
  <main>
    <LandingPage v-if="!hasExited" />
    <MainPage v-else />
  </main>
</template>

<style scoped></style>
