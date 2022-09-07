<script setup lang="ts">
import router from "@/router";
import { CloseCircleOutlined } from "@ant-design/icons-vue";
import type { ExtractPropTypes } from "vue";
const props: ExtractPropTypes<{ isOpen: boolean; menuItems: any[] }> = defineProps({
  isOpen: Boolean,
  menuItems: Array,
});

const emit = defineEmits(["setOpen"]);
function handleSelectMenu(path: string) {
  emit("setOpen");
  router.push(path);
}
</script>

<template>
  <nav :style="`transform: translateX(${props.isOpen ? '0' : '-100%'})`">
    <box class="header">
      <button class="close-btn" @click="$emit('setOpen')"><CloseCircleOutlined /></button>
    </box>
    <ul>
      <li v-for="item in props.menuItems" @click="() => handleSelectMenu(item.route)">
        <component style="margin-right: 16px" :is="item.icon"></component> {{ item.title }}
      </li>
    </ul>
  </nav>
</template>

<style scoped>
nav {
  z-index: 2;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  width: 400px;
  max-width: 100%;
  transition: 0.5s;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
}

@media (min-width: 580px) {
  nav {
    width: 90%;
  }
}

ul {
  padding: 16px;
  list-style-type: none;
}

li {
  padding: 8px 16px;
  margin: 8px 0;
  font-size: 16pt;
  background: rgba(255, 255, 255, 0.1);
  transition: 0.5s;
  border-radius: 8px;
  cursor: pointer;
  user-select: none;
  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
}

li:active {
  background: rgba(255, 255, 255, 0.4);
}

.header {
  display: flex;
  justify-content: flex-end;
  padding: 18px;
}

.close-btn {
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  width: 30px;
  height: 30px;
  font-size: 19pt;
  border: none;
  transition: 0.1s;
  background: none;
  color: white;
}
.close-btn:active {
  background: rgba(255, 255, 255, 0.5);
}
</style>
