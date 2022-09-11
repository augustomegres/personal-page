<script lang="ts" setup>
import linkedin from "@/assets/icons/techs/linkedin.svg";
import github from "@/assets/icons/techs/github.svg";

import javascript from "@/assets/icons/techs/javascript.svg";
import git from "@/assets/icons/techs/git.svg";
import typescript from "@/assets/icons/techs/typescript.svg";
import nodejs from "@/assets/icons/techs/nodejs.svg";
import react from "@/assets/icons/techs/react.svg";
import vue from "@/assets/icons/techs/vue.svg";
import docker from "@/assets/icons/techs/docker.svg";
import mysql from "@/assets/icons/techs/mysql.svg";
import postgresql from "@/assets/icons/techs/postgresql.svg";
import circleci from "@/assets/icons/techs/circleci.svg";
import mongo from "@/assets/icons/techs/mongodb.svg";

const techs: { alt: string; src: any; title: string }[] = [
  {
    alt: "javascript",
    src: javascript,
    title: "Javascript",
  },
  {
    alt: "typescript",
    src: typescript,
    title: "Typescript",
  },
  {
    alt: "git",
    src: git,
    title: "Git",
  },
  {
    alt: "nodejs-logo",
    title: "NodeJS",
    src: nodejs,
  },
  {
    alt: "reactjs-logo",
    title: "ReactJS",
    src: react,
  },
  {
    alt: "vue-logo",
    title: "VueJS",
    src: vue,
  },
  {
    alt: "docker-logo",
    title: "Docker",
    src: docker,
  },
  {
    alt: "mysql-logo",
    title: "Mysql",
    src: mysql,
  },
  {
    alt: "postgresql-logo",
    title: "PostgreSQL",
    src: postgresql,
  },
  {
    alt: "mongo-logo",
    title: "MongoDB",
    src: mongo,
  },
  {
    alt: "circleci-logo",
    title: "CircleCI",
    src: circleci,
  },
];
</script>
<template>
  <main>
    <body>
      <h1>Bio</h1>
      <div class="social">
        <a href="https://linkedin.com/in/megres" class="social-container">
          <img :src="linkedin" alt="linkedin-logo" class="logo" />
          <p class="text">Linkedin</p>
        </a>

        <a href="https://github.com/augustomegres" class="social-container">
          <img :src="github" alt="github-logo" class="logo" />
          <p class="text">Github</p>
        </a>
      </div>
      <p>
        Olá, sou um desenvolvedor fullstack apaixonado por aprender, estou sempre procurando aprender novas tecnologias
        e boas práticas no desenvolvimento de sofware e as vezes dou uma caminhada pelo mundo do design.
      </p>
      <p>
        Em horas vagas curto assistir uma boa série/filme, jogar um joguinho ou tirar uma ideia do papel e coloca-la em
        prática com muito código e mão na massa.
      </p>
      <p>Abaixo, segue algumas tenologias que trabalho.</p>

      <div class="techs">
        <div v-for="tech in techs" class="tech-container">
          <img :src="tech.src" :alt="tech.alt" class="logo" />
          <p class="text">{{ tech.title }}</p>
        </div>
      </div>
    </body>
  </main>
</template>

<style scoped>
body {
  margin: 2rem;
}
h1 {
  font-size: 20pt;
  margin-top: 20px;
}

p {
  margin-top: 16px;
}

.social {
  display: flex;
}

.social-container {
  display: flex;
  margin: 16px 0;
  align-items: center;
  text-decoration: none;
  color: white;
  cursor: pointer;
}

.social-container .text {
  margin: auto 16px;
  margin-right: 32px;
}

.techs {
  margin-top: 32px;
  display: flex;
  justify-content: center;
  border-radius: 8px 8px 0 0;
  flex-wrap: wrap;
}

.tech-container {
  display: flex;
  align-items: center;
  margin: 30px;
}

.logo {
  width: 30px;
}

.text {
  font-size: 22px;
  margin-left: 12px;
}
</style>
