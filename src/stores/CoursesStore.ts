import { defineStore } from "pinia";
import type Course from "@/interfaces/Course";

export const useCoursesStore = defineStore("courses", {
  state: () => {
    return {
      courses: [] as Course[]
    };
  },
  actions: {
    async registerCourse(course: { teacherId: string; name: string; description: string }) {
      const response = await fetch("https://localhost:44320/api/course", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(course)
      });

      if (!response.ok) {
        return false;
      }

      return true;
    },
    async fetchAllCourses() {
      const response = await fetch("https://localhost:44320/api/course");
      const data = await response.json();
      this.courses = data;

      return this.courses;
    }
  }
});
