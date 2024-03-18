<template>
  <div class="grid">
    <div class="col-4">
      <form @submit.prevent="registerStudent">
        <div class="title mb-4">Register as student:</div>

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
        <div class="mb-4">
          <div class="mb-1">
            <label>Date of birth:</label>
          </div>
          <div>
            <Calendar v-model="state.dateOfBirth" class="w-full" />
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

import Button from "primevue/button";
import Calendar from "primevue/calendar";
import InputText from "primevue/inputtext";
import Toast from "primevue/toast";

const toast = useToast();
const studentsStore = useStudentsStore();

const state = reactive({
  firstName: "",
  lastName: "",
  dateOfBirth: ""
});

const registerStudent = () => {
  toast.add({
    severity: "success",
    summary: "Account registered",
    detail: "Your student account has been registered!",
    life: 3000
  });

  studentsStore.registerStudent({
    firstName: state.firstName,
    lastName: state.lastName,
    dateOfBirth: state.dateOfBirth
  });
};
</script>

<style scoped>
.title {
  font-size: 20px;
}
</style>
