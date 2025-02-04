<template>
  <div 
    class="winner relative flex flex-col justify-between w-[205px] h-28 origin-center"
    :class="{'winner__win': winItem.winOpen }"
  >
    <div 
      class="winner__front absolute top-0 left-0 flex w-full h-full bg-[#2E1A6B] rounded-2xl"
      :class="{'winner__waiting': winItem.waitingWin}"
    >
      <span 
        class="winner__waiting_text absolute top-3 left-4 text-xl text-[#6D3DFF]"
        :class="{'text-white': winItem.waitingWin}"
      >{{ winItem.number }}</span>
      <div class="relative m-auto z-10">
        <img src="@/assets/images/winners/winner-front.svg" alt="winner">
      </div>
    </div>
    <div class="winner__back absolute top-0 left-0 flex flex-col justify-between w-full h-full py-3 px-4 bg-[#402394] rounded-2xl">
      <div class="flex justify-between rotate-y-180">
        <span class="text-xl text-[#6D3DFF]">{{ winItem.number }}</span>
        <strong
          :style="{'background-color': winItem.color}"
          class="h-6 px-2 rounded-[4px] text-sm leading-6"
        >{{ winItem.type }}</strong>
      </div>
      <div class="flex flex-col">
        <strong class="mb-[2px] text-xl">{{ winItem.winnerID }}</strong>
        <span class="text-base text-[#EEC546]">{{ winItem.winnerPrize }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IWinnersItem } from '@/types/types';

interface Props {
  winItem: IWinnersItem;
}

const props = defineProps<Props>();

</script>

<style scoped>
.winner {
  perspective: 410px;
  transform-style: preserve-3d;
  transition: transform 500ms linear;
  will-change: transform;
}

.winner__win {
  transform: rotateX(180deg);
}

.winner__front {
  backface-visibility: hidden;
  transform: rotateX(0deg);
  z-index: 2;
}

.winner__front:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #2E1A6B;
  opacity: 1;
  transition: opacity 500ms 500ms linear;
  border-radius: 16px;
  z-index: 2;
}

.winner__waiting_text {
  transition: color 500ms 500ms linear;
}

.winner__waiting {
  background: linear-gradient(90deg, #6D3DFF -48.94%, #2E1A6B 100%);
}

.winner__waiting:before {
  opacity: 0;
}

.winner__back {
  transform: rotateX(180deg);
} 

</style>
