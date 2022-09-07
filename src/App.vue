<script setup lang="ts">
import { RouterView } from "vue-router";
import Header from "./components/Header.vue";
</script>

<template>
  <Header />
  <RouterView />
</template>

<style scoped>
@font-face {
  font-family: "Homenaje";
  src: local("Homenaje"), url(./assets/fonts/Homenaje-Regular.ttf) format("truetype");
}
</style>
