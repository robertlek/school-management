<template>
  <div class="flex flex-column h-screen">
    <TheHeader />
    <MainWrapper />
    <TheFooter />
  </div>
</template>

<script setup lang="ts">
import TheHeader from "@/components/layout/TheHeader.vue";
import MainWrapper from "./components/layout/MainWrapper.vue";
import TheFooter from "@/components/layout/TheFooter.vue";
</script>
