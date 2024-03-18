import { defineStore } from "pinia";

export const useStudentsStore = defineStore("students", {
  state: () => {
    return {
      students: []
    };
  },
  actions: {
    registerStudent(student: any) {
      fetch("https://localhost:44320/api/student", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(student)
      });
    },
    async getAllStudents() {
      const response = await fetch("https://localhost:44320/api/student");
      const data = await response.json();
      this.students = data;

      return this.students;
    }
  }
});
