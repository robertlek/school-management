<template>
  <div class="flex flex-wrap">
    <div class="grid">
      <div v-for="course in courses" :key="course.id" class="col-4">
        <Card class="shadow-3 overflow-hidden">
          <template #header>
            <div class="flex justify-content-center underline cursor-pointer p-2">
              <span class="pi pi-book mr-2" />
              {{ course.name }}
            </div>
          </template>
          <template #subtitle>
            <span class="text-teal-700">Course by {{ course.teacher }}</span>
          </template>
          <template #content>
            <small class="text-gray-500">{{ course.description }}</small>
            <div class="flex justify-content-end mt-3 mb-2">
              <Badge :value="course.studentsAttended + ' students attended'" severity="secondary" />
            </div>
          </template>
          <template #footer>
            <Button label="Register to Course" class="w-full" />
          </template>
        </Card>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCoursesStore } from "@/stores/CoursesStore";

import Badge from "primevue/badge";
import Button from "primevue/button";
import Card from "primevue/card";

const { getAll } = useCoursesStore();

const courses = getAll();
</script>
