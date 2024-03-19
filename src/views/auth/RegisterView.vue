<template>
  <div class="grid">
    <div class="col-4">
      <form @submit.prevent="registerUser">
        <div class="title mb-4">Register a new account:</div>

        <div class="mb-2">
          <div class="mb-1">
            <label for="first-name">First name:</label>
          </div>
          <div>
            <InputText
              v-model="state.firstName"
              type="text"
              id="first-name"
              class="w-full"
              autocomplete="off"
            />
          </div>
        </div>
        <div class="mb-2">
          <div class="mb-1">
            <label for="last-name">Last name:</label>
          </div>
          <div>
            <InputText
              v-model="state.lastName"
              type="text"
              id="last-name"
              class="w-full"
              autocomplete="off"
            />
          </div>
        </div>
        <div class="mb-3">
          <div class="mb-1">
            <label>Date of birth:</label>
          </div>
          <div>
            <Calendar v-model="state.dateOfBirth" class="w-full" />
          </div>
        </div>
        <div class="flex mb-5">
          <div class="mr-3">
            <RadioButton v-model="state.role" input-id="role-student" name="role" value="student" />
            <label for="role-student" class="ml-2">Student</label>
          </div>
          <div class="mr-3">
            <RadioButton v-model="state.role" input-id="role-teacher" name="role" value="teacher" />
            <label for="role-teacher" class="ml-2">Teacher</label>
          </div>
          <div>
            <RadioButton
              v-model="state.role"
              input-id="role-guest-teacher"
              name="role"
              value="guest-teacher"
            />
            <label for="role-guest-teacher" class="ml-2">Guest Teacher</label>
          </div>
        </div>

        <Button type="submit" label="Register" class="w-full" />
      </form>
    </div>
  </div>

  <Toast />
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { useToast } from "primevue/usetoast";
import { useStudentsStore } from "@/stores/StudentsStore";
import { useTeachersStore } from "@/stores/TeachersStore";

import Button from "primevue/button";
import Calendar from "primevue/calendar";
import InputText from "primevue/inputtext";
import RadioButton from "primevue/radiobutton";
import Toast from "primevue/toast";

const toast = useToast();
const studentsStore = useStudentsStore();
const teachersStore = useTeachersStore();

const state = reactive({
  firstName: "",
  lastName: "",
  dateOfBirth: "",
  role: "student"
});

const registerUser = () => {
  if (state.role === "student") {
    studentsStore.registerStudent({
      firstName: state.firstName,
      lastName: state.lastName,
      dateOfBirth: state.dateOfBirth
    });
  } else {
    teachersStore.registerTeacher({
      firstName: state.firstName,
      lastName: state.lastName,
      dateOfBirth: state.dateOfBirth,
      isGuest: state.role === "guest-teacher"
    });
  }

  toast.add({
    severity: "success",
    summary: "Account registered",
    detail: "Your account has been registered!",
    life: 3000
  });
};
</script>

<style scoped>
.title {
  font-size: 20px;
}
</style>
