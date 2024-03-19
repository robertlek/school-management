import { defineStore } from "pinia";
import type Student from "@/interfaces/Student";

export const useStudentsStore = defineStore("students", {
  state: () => {
    return {
      students: [] as Student[]
    };
  },
  actions: {
    async registerStudent(student: Student) {
      const response = await fetch("https://localhost:44320/api/student", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(student)
      });

      if (!response.ok) {
        return false;
      }

      return true;
    },
    async getAllStudents() {
      const response = await fetch("https://localhost:44320/api/student");
      const data = await response.json();
      this.students = data;

      return this.students;
    },
    async fetchStudent(id: String) {
      const response = await fetch(`https://localhost:44320/api/student/${id}`);

      if (response.ok) {
        return await response.json();
      } else {
        throw Error;
      }
    }
  }
});
