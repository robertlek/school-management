import { defineStore } from "pinia";
import { useStudentsStore } from "./StudentsStore";
import { useTeachersStore } from "./TeachersStore";

export const useAuthStore = defineStore("auth", {
  state: () => {
    return {
      userId: null,
      role: ""
    };
  },
  getters: {
    isLoggedIn(state) {
      return state.userId !== null;
    },
    isStudent(state) {
      return state.role === "student";
    },
    isTeacher(state) {
      return state.role === "teacher";
    },
    isGuestTeacher(state) {
      return state.role === "guest-teacher";
    },
    getUserId(state): string {
      return state.userId !== null ? state.userId : "";
    }
  },
  actions: {
    async login(id: string, role: string) {
      const { fetchStudent } = useStudentsStore();
      const { fetchTeacher } = useTeachersStore();

      if (role === "student") {
        try {
          const student = await fetchStudent(id);

          this.userId = student.id;
          this.role = role;
        } catch {
          return false;
        }
      } else {
        try {
          const teacher = await fetchTeacher(id);

          this.userId = teacher.id;
          this.role = teacher.isGuest ? "guest-teacher" : "teacher";
        } catch {
          return false;
        }
      }

      return true;
    },
    logout() {
      this.userId = null;
      this.role = "";
    }
  }
});
