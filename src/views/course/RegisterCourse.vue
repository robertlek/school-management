<template>
  <Card v-if="isUserAuthorized" class="shadow-3">
    <template #title>
      <section>Register a new course</section>
    </template>
    <template #subtitle>
      <section>
        Use a meaningful name for your course and a brief description about its content.
      </section>
    </template>
    <template #content>
      <form @submit.prevent="registerCourse">
        <div class="mt-4">
          <label for="name">Course name:</label>
          <InputText
            v-model.trim="state.name"
            id="name"
            class="w-full mt-1"
            autocomplete="off"
            required
          />
        </div>
        <div class="mt-4">
          <label for="description">Course description:</label>
          <Textarea
            v-model.trim="state.description"
            id="description"
            class="w-full mt-1"
            rows="10"
            autocomplete="off"
            required
          />
        </div>
        <div class="mt-4">
          <Button type="submit" class="w-full" label="Register Course" />
        </div>
      </form>
    </template>
  </Card>
  <Message v-else severity="error" :closable="false"
    >You are either not logged in or not authorized to register a course.</Message
  >

  <Toast />
</template>

<script setup lang="ts">
import { reactive, computed } from "vue";
import { useAuthStore } from "@/stores/AuthStore";
import { useCoursesStore } from "@/stores/CoursesStore";
import { useRouter } from "vue-router";
import { useToast } from "primevue/usetoast";

import Button from "primevue/button";
import Card from "primevue/card";
import InputText from "primevue/inputtext";
import Message from "primevue/message";
import Textarea from "primevue/textarea";
import Toast from "primevue/toast";

const authStore = useAuthStore();
const coursesStore = useCoursesStore();
const router = useRouter();
const toast = useToast();

const state = reactive({
  name: "",
  description: ""
});

const isUserAuthorized = computed(() => {
  return authStore.isLoggedIn && (authStore.isTeacher || authStore.isGuestTeacher);
});

const registerCourse = async () => {
  const status = await coursesStore.registerCourse({
    teacherId: authStore.getUserId,
    name: state.name,
    description: state.description
  });

  if (status) {
    router.push("/courses");
  } else {
    toast.add({
      severity: "error",
      summary: "Failed to register course",
      detail: "Failed to register your course!",
      life: 3000
    });
  }
};
</script>
