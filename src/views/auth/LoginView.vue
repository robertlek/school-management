<template>
  <div class="grid">
    <div class="col-4">
      <form @submit.prevent="loginUser">
        <div class="title mb-4">Login into your account:</div>

        <div class="mb-3">
          <div class="mb-1">
            <label for="user-id">Authentication ID:</label>
          </div>
          <div>
            <InputText
              v-model="state.id"
              type="text"
              id="user-id"
              class="w-full"
              autocomplete="off"
            />
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

        <Button type="submit" label="Login" class="w-full" />
      </form>
    </div>
  </div>

  <Toast />
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { useAuthStore } from "@/stores/AuthStore";

import Button from "primevue/button";
import InputText from "primevue/inputtext";
import RadioButton from "primevue/radiobutton";
import Toast from "primevue/toast";

const { login } = useAuthStore();

const state = reactive({
  id: "",
  role: "student"
});

const loginUser = () => {
  login(state.id, state.role);
};
</script>

<style scoped>
.title {
  font-size: 20px;
}
</style>
