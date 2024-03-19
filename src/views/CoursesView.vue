<template>
  <div class="flex flex-wrap">
    <div class="grid">
      <div v-for="course in state.coursesWithTeachers" :key="course.course.id" class="col-4">
        <Card class="shadow-3 overflow-hidden">
          <template #header>
            <div class="flex justify-content-center underline cursor-pointer p-2">
              <span class="pi pi-book mr-2" />
              {{ course.course.name }}
            </div>
          </template>
          <template #subtitle>
            <span class="text-teal-700">Course by {{ course.teacherName }}</span>
          </template>
          <template #content>
            <small class="text-gray-500">{{ course.course.description }}</small>
            <div class="flex justify-content-end mt-3 mb-2">
              <Badge
                :value="course.course.attendedStudents + ' students attended'"
                severity="secondary"
              />
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
import { reactive, onMounted } from "vue";
import { useCoursesStore } from "@/stores/CoursesStore";
import type Course from "@/interfaces/Course";
import { useTeachersStore } from "@/stores/TeachersStore";

import Badge from "primevue/badge";
import Button from "primevue/button";
import Card from "primevue/card";

const coursesStore = useCoursesStore();
const teachersStore = useTeachersStore();

const state = reactive({
  courses: [] as Course[],
  coursesWithTeachers: [] as { course: Course; teacherName: string }[]
});

onMounted(async () => {
  const courses = await coursesStore.fetchAllCourses();
  const coursesWithTeachers = await Promise.all(
    courses.map(async (course) => {
      const teacher = await teachersStore.fetchTeacher(course.teacherId);
      return { course, teacherName: `${teacher.firstName} ${teacher.lastName}` };
    })
  );
  state.coursesWithTeachers = coursesWithTeachers;
});
</script>
