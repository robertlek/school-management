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
      <div v-if="!isLoggedIn" class="flex">
        <RouterLink to="/login" class="text-teal-300 no-underline mr-3">
          <span class="pi pi-user mr-2" />
          <span>Login</span>
        </RouterLink>
        <div class="ml-3">
          <RouterLink to="/register" class="text-teal-300 no-underline">
            <span class="pi pi-user-plus mr-2" />
            <span>Register</span>
          </RouterLink>
        </div>
      </div>
      <div
        v-else
        class="flex align-items-center text-teal-300 cursor-pointer"
        @click="authStore.logout"
      >
        <span class="pi pi-power-off mr-2" />
        <span>Logout</span>
      </div>
    </template>
  </Menubar>
</template>

<script setup lang="ts">
import { reactive, computed } from "vue";
import { RouterLink } from "vue-router";
import { useAuthStore } from "@/stores/AuthStore";

import Menubar from "primevue/menubar";

const authStore = useAuthStore();

const state = reactive({
  menuItems: [
    {
      label: "Home",
      icon: "pi pi-home",
      route: "/home"
    },
    {
      label: "Students",
      icon: "pi pi-users",
      route: "/students"
    },
    {
      label: "Courses",
      icon: "pi pi-book",
      route: "/courses"
    }
  ]
});

const isLoggedIn = computed(() => {
  return authStore.isLoggedIn;
});
</script>
