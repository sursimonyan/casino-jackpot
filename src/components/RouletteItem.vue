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

const rotateDeg = computed(() => {
  return `transform: translateX(-50%) rotate(${props.index * 30}deg)`;
})

</script>

<style scoped lang="scss">
.rouletteitem {
  clip-path: polygon(0 0, 100% 0, 90% 45%, 10% 45%);

  &:nth-child(odd) {
    background: url("/src/assets/images/roulette/sector-dark.png") top / contain no-repeat;
  }

  &:nth-child(even) {
    background: url("/src/assets/images/roulette/sector-light.png") top / contain no-repeat;
  }

  &:nth-child(4n) {
    background: url("/src/assets/images/roulette/sector-middle.png") top / contain no-repeat;
  }
}
</style>
