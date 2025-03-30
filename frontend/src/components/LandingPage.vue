<script setup lang="ts">
import { useLandingPageStore } from "@/stores/landingPage"

const landingPageStore = useLandingPageStore()

function exitLandingPage() {
  landingPageStore.setHasExited()
}
</script>

<template>
  <div class="container">
    <h1>Landing Page</h1>
    <button class="exit" @click="exitLandingPage">Let's Go</button>
  </div>
</template>

<style scoped>
.container {
  background: var(--green);
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.exit {
  background: var(--green-dark);
  color: var(--button-text);
  padding: 10px 20px;
  border-radius: 5px;
  transition: background-color 0.2s;
}

.exit:hover {
  background: var(--green);
}
</style>
