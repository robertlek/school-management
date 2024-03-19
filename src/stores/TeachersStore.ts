import { defineStore } from "pinia";
import type Teacher from "@/interfaces/Teacher";

export const useTeachersStore = defineStore("teachers", {
  state: () => {
    return {
      teachers: [] as Teacher[]
    };
  },
  actions: {
    async registerTeacher(teacher: Teacher) {
      const response = await fetch("https://localhost:44320/api/teacher", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(teacher)
      });

      if (!response.ok) {
        return false;
      }

      return true;
    },
    async getAllTeachers() {
      const response = await fetch("https://localhost:44320/api/teacher");
      const data = await response.json();
      this.teachers = data;

      return this.teachers;
    },
    async fetchTeacher(id: String) {
      const response = await fetch(`https://localhost:44320/api/teacher/${id}`);

      if (response.ok) {
        return await response.json();
      } else {
        throw Error;
      }
    }
  }
});
