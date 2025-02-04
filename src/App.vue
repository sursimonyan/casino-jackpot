<template>
  <div class="relative max-w-[1720px] w-full h-[100vh] mx-auto py-4 px-5 text-white z-10 overflow-hidden">
    <div class="bg_star absolute top-[calc(50%-800px)] left-[calc(50%-900px)] w-[1800px] h-[1800px]">
      <img
        alt="animation star"
        src="./assets/images/bg-star.png"
      >
    </div>
    <div class="relative flex justify-center gap-x-4 mx-auto mb-4 z-10">
      <a href="#" class="max-w-[205px] ">
        <img class="mx-auto" src="./assets/images/logo-hype.png" alt="hype">
      </a>
      <a href="#" class="max-w-[205px]">
        <img class="mx-auto" src="./assets/images/logo-cbc.png" alt="cbc">
      </a>
      <a href="#" class="max-w-[205px">
        <img class="mx-auto" src="./assets/images/logo-unlim.png" alt="unlim">
      </a>
    </div>  
    <h1 class="relative z-10">
      <img class="mx-auto" src="@/assets/images/title.png" alt="title">
    </h1>
    <div class="roulette-center flex justify-between">
      <Prizes />
      <Roulette
        :spinCount="spinCount"
        :rouletteSpin="rouletteSpin"
        :isYourWinLightAnimation="isYourWinLightAnimation"
        @spin-play="spinPlay"
      />    
      <Winners 
        :spinCount="spinCount"
      />
    </div>
    <Parallax />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Roulette from './components/Roulette.vue';
import Parallax from './components/Parallax.vue';
import Winners from './components/Winners.vue';
import Prizes from './components/Prizes.vue';

const spiningDelay = 5300;

const spinCount = ref<number>(10);
const rouletteSpin = ref<boolean>(false);
const isYourWinLightAnimation = ref<boolean>(false);

const spinPlay = () => {
  if (!rouletteSpin.value) {
    rouletteSpin.value = true;

    setTimeout(() => {
      rouletteSpin.value = false; 

      if (spinCount.value) {
        spinCount.value--;
      }
    }, spiningDelay);
  }
}

</script>

<style scoped>

.bg_star {
  animation: star-animation 20s linear infinite;
}

@keyframes star-animation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

</style>
