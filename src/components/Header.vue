<script setup lang="ts">
import router from "@/router";
import {
  BranchesOutlined,
  EditOutlined,
  ExperimentOutlined,
  HomeOutlined,
  MenuOutlined,
  UserOutlined,
} from "@ant-design/icons-vue";
import { reactive, type Component } from "vue";
import SidebarVue from "./Sidebar.vue";
import DevIcon from "@/assets/icons/code.png";

const sidebar = reactive({
  isOpen: false,
  setOpen() {
    this.isOpen = !this.isOpen;
  },
});

let showNav = true;
if (window.innerWidth >= 960) {
  showNav = false;
}

const MenuOptions: { id: number; title: string; icon: Component; route: string }[] = [
  { id: 1, title: "Início", icon: HomeOutlined, route: "/" },
  { id: 2, title: "Sobre", icon: UserOutlined, route: "/sobre" },
  { id: 3, title: "Projetos", icon: BranchesOutlined, route: "/projetos" },
  { id: 4, title: "Experiências", icon: ExperimentOutlined, route: "/trajetoria-profissional" },
  { id: 5, title: "Artigos", icon: EditOutlined, route: "/artigos" },
];
</script>

<template>
  <header>
    <div class="menu" v-if="!showNav">
      <div class="menu-logo" @click="router.push('/')" style="cursor: pointer; user-select: none">
        <p class="rainbow">&lt; / ></p>
      </div>
      <div class="menu-items">
        <div class="item" v-for="item in MenuOptions" :key="item.id" @click="router.push(item.route)">
          <component :is="item.icon" style="margin-right: 4px"></component> {{ item.title }}
        </div>
      </div>
    </div>
    <div v-if="showNav" class="menu">
      <div class="mobile-menu">
        <div class="menu-btn" @click="sidebar.setOpen"><MenuOutlined /></div>
        <div class="menu-logo" @click="router.push('/')" style="cursor: pointer; user-select: none">
          <p class="rainbow">&lt; / ></p>
        </div>
      </div>
      <SidebarVue @setOpen="sidebar.setOpen()" :menuItems="MenuOptions" :isOpen="sidebar.isOpen" />
    </div>
  </header>
</template>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  padding: 20px;
}

.menu {
  display: flex;
  width: 100%;
  flex: 1;
  justify-content: space-between;
  align-items: center;
}

.mobile-menu {
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
}

.mobile-menu .menu-logo img {
  width: 30px !important;
}

.rainbow {
  font-weight: 900;
  font-family: Arial, Helvetica, sans-serif;
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

.menu-items {
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
}

.item {
  transition: 0.2s;
  padding: 8px;
  border-radius: 8px;
  user-select: none;
}
.item:active {
  background: rgba(255, 255, 255, 0.2);
}

.menu .item {
  margin-left: 40px;
}

.menu-btn {
  z-index: 4;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.2s;
  border-radius: 8px;
  border: none;
  width: 40px;
  height: 40px;
}

@media (min-width: 960px) {
  .menu-btn {
    display: none;
  }
}

.menu-btn:active {
  background: rgba(255, 255, 255, 0.6);
}

.menu-btn-icon {
  width: 24px;
}

.country-flag {
  width: 50px;
  height: 35px;
}

.navbar {
  position: absolute;
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
