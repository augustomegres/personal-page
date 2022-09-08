<script setup lang="ts">
import Memoji from "@/assets/Memoji.svg";
const showMemoji = window.innerWidth > 980;
</script>

<template>
  <main>
    <body>
      <div style="display: flex; justify-content: space-around">
        <div class="presentation">
          <h1>OLÁ</h1>
          <h1 style="margin-bottom: 10px">SOU O ZÉ</h1>
          <h1 class="rainbow">FULLSTACK</h1>
          <h1 class="rainbow">DEVELOPER</h1>
        </div>
        <img v-if="showMemoji" :src="Memoji" />
      </div>
    </body>
  </main>
</template>

<style scoped>
.presentation {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 2rem;
  font-size: 28pt;
  height: calc(100vh - 210px);
}

.techs {
  max-width: 100%;
  display: grid;
  gap: 40px;
  margin-left: 4rem;
  margin-right: 4rem;
}

.tech-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 70px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.4);
}

.tech-icon {
  width: 40px;
  height: 40px;
}

.rainbow {
  background: linear-gradient(
    315deg,
    rgba(102, 102, 255, 1) 0%,
    rgba(0, 239, 255, 1) 20%,
    rgba(0, 201, 42, 1) 40%,
    rgba(239, 255, 0, 1) 60%,
    rgba(255, 51, 153, 1) 80%,
    rgba(102, 102, 255, 1) 100%
  );
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: rainbow_animation 6s ease-in-out infinite;
  background-size: 400% 100%;
}

@media (min-width: 540px) {
  .presentation {
    font-size: 34pt;
  }
}

@media (min-width: 720px) {
  .presentation {
    font-size: 38pt;
    margin: 0 3rem;
  }
}

@media (min-width: 960px) {
  .presentation {
    font-size: 38pt;
    margin: 0 4rem;
  }
}

@media (min-width: 1280px) {
  .presentation {
    font-size: 45pt;
  }
}

@keyframes rainbow_animation {
  0%,
  100% {
    background-position: 0 0;
  }

  50% {
    background-position: 100% 0;
  }
}
</style>
