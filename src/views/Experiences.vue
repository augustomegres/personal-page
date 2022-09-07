<script setup lang="ts">
import HeaderVue from "@/components/Header.vue";
import { CloseCircleOutlined } from "@ant-design/icons-vue";
import { ref, type Ref } from "vue";

type Experience = {
  id: number;
  title: string;
  standing: string;
  position: string;
  paragraphs: { title?: string; descriptions: string[] }[];
};
const experiences: Experience[] = [];

experiences.push({
  id: 1,
  title: "Energisa",
  position: "Estagiário",
  standing: "Mai/2017 até Mai/2018",
  paragraphs: [
    {
      title: "Sobre a empresa",
      descriptions: [
        "A energisa é uma empresa de grande porte do setor de distribuição elétrica, mas esta também atua com a manutenção mecânica de equipamentos relacionados ao setor.",
      ],
    },
    {
      title: "Meu início na empresa",
      descriptions: [
        "Aqui foi onde de fato eu iniciei minha carreira de fato, inserido em um ambiente coorporativo de grande porte e com diversas oportunidades.",
        "Iniciei atuando como estagiário de segurança do trabalho, trabalhando diretamente na medicina do trabalho, mas logo fui transferido para outro departamento, devido ao meu grande interesse em análise de dados, comecei a trabalhar no RH apoiando e ajudando as áreas de treinamento, departamento pessoal, recrutamento e seleção e apoio a gerência.",
      ],
    },
    {
      title: "Projeto de estágio",
      descriptions: [
        "Uma das grandes propostas do programa de estágio da empresa era desenvolver um projeto relacionado a área de atuação.",
        "Meu projeto foi focado na redução do absenteísmo na empresa, focado em análisar os CIDs que eram os maiores causadores do absenteísmo e direcionar as campanhas de medicina do trabalho para focar diretamente nestes causadores.",
      ],
    },
  ],
});

experiences.push({
  id: 2,
  title: "Energisa",
  position: "Assistente administrativo",
  standing: "Mai/2018 até Mai/2019",
  paragraphs: [
    {
      descriptions: [
        "A energisa é a empresa onde tive meu primeiro contato com um ambiente coorporativo realmente grande.",
        "A energisa é a empresa onde tive meu primeiro contato com um ambiente coorporativo realmente grande.",
      ],
    },
  ],
});

experiences.push({
  id: 3,
  title: "SmartNX",
  position: "Analista de desenvolvimento",
  standing: "Out/2020 até Jan/2022",
  paragraphs: [
    {
      descriptions: [
        "A energisa é a empresa onde tive meu primeiro contato com um ambiente coorporativo realmente grande.",
      ],
    },
  ],
});

experiences.push({
  id: 4,
  title: "Ucred",
  position: "Analista de desenvolvimento",
  standing: "Jan/2022 até Atualmente",
  paragraphs: [
    {
      descriptions: [
        "A energisa é a empresa onde tive meu primeiro contato com um ambiente coorporativo realmente grande.",
      ],
    },
  ],
});

const isMobile = !(window.innerWidth > 980);
const mobileIsOpen = ref(false);
const selectedExperience: Ref<Experience | null> = !isMobile ? ref(experiences[experiences.length - 1]) : ref(null);

function setSelectedExperience(experience: Experience) {
  selectedExperience.value = experience;
  mobileIsOpen.value = true;
}

function removeSelectedExperience() {
  selectedExperience.value = null;
  mobileIsOpen.value = false;
}
</script>

<template>
  <main>
    <body>
      <div class="box">
        <div class="cards-container">
          <div class="lines">
            <div v-for="_ in experiences" class="line-dot-container">
              <div class="dot"></div>
              <div class="line"></div>
            </div>
          </div>
          <div class="cards">
            <div
              v-for="experience in experiences"
              :class="`card ${experience.id === selectedExperience?.id ? 'selected' : ''}`"
              @click="() => setSelectedExperience(experience)"
            >
              <h4>{{ experience.standing }}</h4>
              <p>{{ experience.title }}</p>
              <p>{{ experience.position }}</p>
            </div>
          </div>
        </div>

        <div :class="`experience-container ${isMobile && 'mobile'}`" v-if="!isMobile || (isMobile && mobileIsOpen)">
          <div v-if="isMobile && mobileIsOpen" style="display: flex; justify-content: flex-end">
            <button class="close-btn" @click="removeSelectedExperience"><CloseCircleOutlined /></button>
          </div>
          <div class="text">
            <h1>{{ selectedExperience?.title }}</h1>
            <h2>{{ selectedExperience?.position }}</h2>
            <div v-for="paragraph in selectedExperience?.paragraphs">
              <h3 v-if="paragraph.title">{{ paragraph.title }}</h3>
              <p v-for="description in paragraph.descriptions">{{ description }}</p>
            </div>
          </div>
        </div>
      </div>
    </body>
  </main>
</template>

<style>
.box {
  display: flex;
  padding: 32px;
  margin-top: 50px;
  height: 100%;
}

.cards-container {
  width: 100%;
  height: 357px;
  display: flex;
  flex: 0.4;
}

@media (max-width: 960px) {
  .cards-container {
    flex: 1;
  }
}

.experience-container {
  flex: 1;
  margin-left: 40px;
  height: 100%;
}

.experience-container h1 {
  font-weight: 300;
  color: rgb(0, 255, 200);
}

.experience-container p {
  font-family: "Roboto", Helvetica, sans-serif;
  margin-top: 8px;
  font-size: 12pt;
  font-weight: 100;
}

.experience-container.mobile {
  position: absolute;
  top: 0;
  left: 0;
  margin-left: 0;
  width: 100vw;
  height: 100vh;

  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
}

.experience-container.mobile .close-btn {
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  width: 30px;
  font-size: 19pt;
  border: none;
  transition: 0.1s;
  background: none;
  color: white;
}

.experience-container.mobile div.text {
  overflow-y: scroll;
  padding: 32px;
  max-height: calc(100% - 114px);
}

.experience-container div.text h3 {
  margin-top: 24px;
}

.experience-container.mobile div {
  padding: 24px 24px 0 0;
}

.dot {
  width: 14px;
  height: 14px;
  background: #d1d6e6;
  border-radius: 50px;
}

.line {
  height: 114px;
  width: 2px;
  background: #d1d6e6;
  margin-left: 5.3px;
}

.line-dot-container:last-child .line:last-child {
  display: none;
}

.timeline {
  padding: 2em;
}

.cards {
  width: 100%;
  margin-left: 12px;
  transform: translateY(-50px);
}

.card {
  cursor: pointer;
  transition: 1s;
}

.card.selected {
  border: 1px solid rgb(0, 163, 128);
  transform: translateX(5px);
}

.cards h4 {
  color: #c5cce2a1;
  font-family: "arial";
  font-style: normal;
  font-weight: lighter;
  font-size: 14px;
  line-height: 19px;
  margin-left: 25px;
  margin-bottom: 5px;
}

.cards p {
  font-family: "arial";
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;

  margin-left: 25px;
}

.cards .card {
  width: 100%;
  height: 93px;
  padding-top: 25px;

  transition: 0.5s;
  border-radius: 10px;

  margin-bottom: 10px;
  background: #d1d6e637;
}
</style>
