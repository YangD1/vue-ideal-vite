<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core';
import { useCounterStore } from '@/stores/counter'
const countStore = useCounterStore()
console.log(countStore.count)
const addOne = () => {
  countStore.count ++
}

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  <main px-16 py-40 text-center>
    <button @click="addOne">增加{{ countStore.count }}</button>
    <p mt-20 text-14 color-gray-400>Flex骰子</p>
  </main>
</template>
