<template>
  <div class="relative flex flex-col max-w-[466px] w-[28%] max-h-[624px] z-10 overflow-hidden">
    <div class="flex flex-col gap-y-4 max-w-[426px] w-full shadow-[0_34px_93px_0_rgba(0,0,0,0.4)]">
      <PrizesItem 
        v-for="prize in data"
        :prize="prize"
        :key="prize.id"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import PrizesItem from './PrizesItem.vue';
import prizesData from '../data/data.json'; 
import type { IPrizesItem } from '@/types/types';

const data = ref<IPrizesItem[]>(prizesData);

</script>
