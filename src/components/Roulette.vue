<template>
  <div class="roulette relative flex w-[616px] h-[616px] z-20">
    <div class="absolute top-0 left-0 w-full h-full flex">
      <img
        src="@/assets/images/roulette/roulette.png"
        class="absolute top-0 left-0 max-w-[616px] max-h-[616px] w-full h-full z-[2]"
        alt="roulette main"
      >
      <div>
        <img
          class="roulette__win_section absolute top-[6px] left-1/2 -translate-x-1/2 z-10 mobile-l:w-[144px] mobile-l:top-[20px]"
          src="@/assets/images/roulette/roulette-win-section.png"
          alt="win section"
        >
      </div>
      <SpinButton 
        :class="rouletteSpin && 'cursor-default hover:brightness-100'"
        @click="winBonus"
      >
      {{ spinCount }}
      </SpinButton>
    </div>
    <RouletteElements 
      :spinCount="spinCount"
      :rouletteSpin="rouletteSpin"
    />
  </div>
</template>

<script setup lang="ts">
import RouletteElements from './RouletteElements.vue';
import SpinButton from './SpinButton.vue';

interface IProps {
  spinCount: number;
  rouletteSpin: boolean;
}

const props = defineProps<IProps>();

const emit = defineEmits(['spin-play']);

const winBonus = () => {
  if(props.spinCount > 0) {
    emit('spin-play');
  }
}

</script>
