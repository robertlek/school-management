<template>
  <Menubar :model="state.menuItems" class="bg-teal-700 border-none border-noround">
    <template #start>
      <div class="mr-4">
        <img src="/src/assets/icons/school-icon.svg" alt="Logo" />
      </div>
    </template>

    <template #item="{ item, props }">
      <RouterLink :to="item.route" v-bind="props.action">
        <span :class="item.icon" class="text-teal-300" />
        <span class="ml-2 text-teal-300">{{ item.label }}</span>
      </RouterLink>
    </template>

    <template #end>
      <div class="flex">
        <div class="text-teal-300 mr-3">
          <span class="pi pi-user mr-2" />
          <span>Login</span>
        </div>
        <div class="text-teal-300 ml-3">
          <span class="pi pi-user-plus mr-2" />
          <span>Register</span>
        </div>
      </div>
    </template>
  </Menubar>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { RouterLink } from "vue-router";

import Menubar from "primevue/menubar";

const state = reactive({
  menuItems: [
    {
      label: "Home",
      icon: "pi pi-home",
      route: "/home"
    },
    {
      label: "About",
      icon: "pi pi-link",
      route: "/about"
    },
    {
      label: "Courses",
      icon: "pi pi-book",
      route: "/courses"
    }
  ]
});
</script>
