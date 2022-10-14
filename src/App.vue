<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core';
import { useCounterStore } from '@/stores/counter'
const countStore = useCounterStore()

const addFuncOne = () => {
  countStore.increment()
}

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  <main px-16 py-40 text-center text-14 color-gray-400>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/demo">Demo</router-link>
    <router-view />
    <button @click="addFuncOne">增加{{ countStore.count }}</button>
    <p mt-20 text-14 color-gray-400>Flex骰子</p>
  </main>
</template>
