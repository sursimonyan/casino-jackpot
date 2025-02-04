<template>
  <div 
    class="prize relative flex items-center w-[426px] h-36 rounded-2xl bg-[#2E1A6B] overflow-hidden transform-gpu"
    :class="{'prize__active': prize.prizePlay}"  
  >
    <strong 
      v-if="prize.prizePlay"
      class="absolute top-4 right-3 h-6 px-2 text-base text-black rounded-[4px] bg-[#EEC546]"
    >
      Разыгрывается
    </strong>
    <div class="max-w-[187px]">
      <img :src="prize.image" alt="prize">
    </div>
    <div>
      <h4 class="text-xl font-bold">{{ prize.title }}</h4>
      <span 
        v-if="!prize.isPrizeCash" class="text-sm">или <strong class="text-base text-[#EEC546]">{{ prize.cash }}</strong> на счёт</span>
        <strong v-else class="text-base text-[#EEC546]">{{ prize.cash }}</strong>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IPrizesItem } from '../types/types';

interface Props {
  prize: IPrizesItem;
}

const props = defineProps<Props>();

</script>

<style scoped>

.prize {
  background: linear-gradient(270deg, #6D3DFF 23%, #422499 49%, #2E1A6B 50%, #5933D1 100%);
  background-size: 932px 160px; 
  background-position-x: 0;
  transition: background 1s ease-out, width 1s ease-out; 
}

.prize__active {
  width: 466px;
  background-position-x: 466px;
}

</style>
