<template>
  <div class="relative max-w-[466px] w-[28%] z-10">
    <div class="flex flex-wrap justify-between gap-y-4 max-w-[426px] w-full shadow-[0_34px_93px_0_rgba(0,0,0,0.4)]">
      <WinnersItem 
        v-for="winItem in winItems"
        :winItem="winItem"
        :spinCount="spinCount"
        :key="winItem.id"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import WinnersItem from './WinnersItem.vue';
import type { IWinnersItem } from '@/types/types';

const winItems = ref<IWinnersItem[]>([
  {
    id: 1,
    number: "01",
    type: "CBC",
    winnerID: "ID: 2004129",
    winnerPrize: "iPhone 15 Pro Max",
    color: "#6D3DFF",
    winOpen: false,
  },
  {
    id: 2,
    number: "02",
    type: "Unlim",
    winnerID: "ID: 2004129",
    winnerPrize: "Apple Watch 9 45mm",
    color: "#FF6825",
    winOpen: false,
  },
  {
    id: 3,
    number: "03",
    type: "Hype",
    winnerID: "ID: 2004129",
    winnerPrize: "Apple Airpods Pro 2",
    color: "#CE2951",
    winOpen: false,
  },
  {
    id: 4,
    number: "04",
    type: "CBC",
    winnerID: "ID: 2004129",
    winnerPrize: "iPhone 15 Pro Max",
    color: "#6D3DFF",
    winOpen: false,
    waitingWin: false,
  },
  {
    id: 5,
    number: "05",
    type: "CBC",
    winnerID: "ID: 2004129",
    winnerPrize: "iPhone 15 Pro Max",
    color: "#6D3DFF",
    winOpen: false,
    waitingWin: false,
  },
  {
    id: 6,
    number: "06",
    type: "CBC",
    winnerID: "ID: 2004129",
    winnerPrize: "iPhone 15 Pro Max",
    color: "#6D3DFF",
    winOpen: false,
    waitingWin: false,
  },
  {
    id: 7,
    number: "07",
    type: "CBC",
    winnerID: "ID: 2004129",
    winnerPrize: "iPhone 15 Pro Max",
    color: "#6D3DFF",
    winOpen: false,
    waitingWin: false,
  },
  {
    id: 8,
    number: "08",
    type: "CBC",
    winnerID: "ID: 2004129",
    winnerPrize: "iPhone 15 Pro Max",
    color: "#6D3DFF",
    winOpen: false,
    waitingWin: false,
  },
  {
    id: 9,
    number: "09",
    type: "CBC",
    winnerID: "ID: 2004129",
    winnerPrize: "iPhone 15 Pro Max",
    color: "#6D3DFF",
    winOpen: false,
    waitingWin: false,
  },
  {
    id: 10,
    number: "10",
    type: "CBC",
    winnerID: "ID: 2004129",
    winnerPrize: "iPhone 15 Pro Max",
    color: "#6D3DFF",
    winOpen: false,
    waitingWin: false,
  },
])

interface Props {
  spinCount: number;
}

const defaultSpinCount = 10;

const props = defineProps<Props>();

const handleOpenWin = (id: number) => {
  winItems.value.forEach((winner) => {
    if (winner.id === id) {
      winner.winOpen = true;
    }
    if (winner.id === (id + 1)) {
      winner.waitingWin = true;
    }
    return winner;
  })
}

watch(() => props.spinCount, (value) => {
  const id = defaultSpinCount - value;
  handleOpenWin(id);
})

</script>
