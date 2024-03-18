import { defineStore } from "pinia";

export const useStudentsStore = defineStore("students", {
  actions: {
    registerStudent(student: any) {
      fetch("https://localhost:44320/api/student", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(student)
      });
    }
  }
});
