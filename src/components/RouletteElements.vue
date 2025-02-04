<template>
  <div 
    :class="animationClasses"
    class="roulette relative w-[580px] h-[580px] m-auto z-[9]"
  >
    <RouletteItem 
      v-for="(index) in 12"
      :index="index"
      :key="index"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import RouletteItem from './RouletteItem.vue';

interface IProps {
  rouletteSpin: boolean;
  spinCount: number;
}

const props = defineProps<IProps>()

// Количеств оборотов колеса 
const spinDefault = 3 * 360;

// Градус оборота для призов
const testRotates = 210;

// Для добавлении класа анимаци врашения
const animationClasses = computed(() => {
  return props.rouletteSpin ? 'roulette__elements_spining' : 'roulette__elements_forwards';
})

// Для анимации врашения
const spinRotate = computed(() => {
  return `${spinDefault + testRotates}deg`;
})

// Последная позицыя выграша
const forwardsRotate = computed(() => {
  return `${testRotates}deg`;
})

</script>

<style lang="scss" scoped>
.roulette__elements {

  &_spining {
    animation: rotate-spin 5s cubic-bezier(0, -0.02, 0, 1.01) forwards;
  }

  &_forwards {
    transform: rotate(v-bind(forwardsRotate));
  }
}

@keyframes rotate-spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(v-bind(spinRotate));
  }
}
</style>
