<script setup lang="ts"></script>

<template>
  <div class="sidebar">
    <div class="top-buttons buttons">
      <button class="icon-button">
        <font-awesome-icon :icon="['fas', 'screwdriver-wrench']" />
      </button>
      <button class="icon-button"><font-awesome-icon :icon="['fas', 'list']" /></button>
    </div>
    <div class="bottom-buttons buttons">
      <button class="icon-button"><font-awesome-icon :icon="['fas', 'file-lines']" /></button>
      <button class="icon-button"><font-awesome-icon :icon="['fas', 'gear']" /></button>
    </div>
  </div>
</template>

<style scoped>
.sidebar {
  background: var(--green);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  padding: 15px 10px;
}

.buttons {
  display: flex;
  flex-direction: column;
}

.icon-button {
  color: var(--button-text);
  border: none;
  padding: 10px;
  margin: 5px 0;
  border-radius: 5px;
  font-size: 1.5rem;
  cursor: pointer;
}

.icon-button:hover {
  background: var(--green-dark);
}
</style>
