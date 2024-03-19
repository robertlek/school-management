import { defineStore } from "pinia";

export const useTeachersStore = defineStore("teachers", {
  state: () => {
    return {
      teachers: []
    };
  },
  actions: {
    registerTeacher(teacher: any) {
      fetch("https://localhost:44320/api/teacher", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(teacher)
      });
    },
    async getAllTeachers() {
      const response = await fetch("https://localhost:44320/api/teacher");
      const data = await response.json();
      this.teachers = data;

      return this.teachers;
    }
  }
});