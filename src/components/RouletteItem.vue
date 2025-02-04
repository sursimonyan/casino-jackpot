<template>
  <div
    class="rouletteitem absolute left-1/2 flex justify-center max-w-[148px] max-h-[310px] w-1/2 h-1/2 pt-5 px-3 text-xl text-white origin-bottom text-center"
    :style="rotateDeg">
  </div>
</template>

<script setup lang="ts">
import type { IRouletteItem } from '@/types/types';
import { computed } from 'vue';

const props = defineProps<IRouletteItem>();

const middleImages = [4, 8, 12];

const darkOrLight = computed(() => {
  return `url(/src/assets/images/roulette/sector-${middleImages.includes(props.index) ? 'middle' : props.index % 2 === 0 ? 'light' : 'dark'}.png)`;
})

const rotateDeg = computed(() => {
  return `transform: translateX(-50%) rotate(${props.index * 30}deg)`;
})

</script>

<style scoped>

.rouletteitem {
  clip-path: polygon(0 0, 100% 0, 90% 45%, 10% 45%);
  background: v-bind(darkOrLight) top / contain no-repeat;
}

</style>
