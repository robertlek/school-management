<template>
  <div class="flex justify-content-center">
    <Card class="shadow-3 w-4">
      <template #content>
        <div class="grid">
          <div class="col">
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
                    required
                  />
                </div>
              </div>
              <div class="flex justify-content-between mb-5">
                <div>
                  <RadioButton
                    v-model="state.role"
                    input-id="role-student"
                    name="role"
                    value="student"
                  />
                  <label for="role-student" class="ml-2">Student</label>
                </div>
                <div>
                  <RadioButton
                    v-model="state.role"
                    input-id="role-teacher"
                    name="role"
                    value="teacher"
                  />
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
      </template>
    </Card>
  </div>

  <Toast />
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "@/stores/AuthStore";
import { useToast } from "primevue/usetoast";

import Button from "primevue/button";
import Card from "primevue/card";
import InputText from "primevue/inputtext";
import RadioButton from "primevue/radiobutton";
import Toast from "primevue/toast";

const { login } = useAuthStore();
const router = useRouter();
const toast = useToast();

const state = reactive({
  id: "",
  role: "student"
});

const loginUser = async () => {
  const status = await login(state.id, state.role);

  if (status) {
    router.push("/home");
  } else {
    toast.add({
      severity: "error",
      summary: "Failed to login",
      detail: "Failed to login into your account!",
      life: 3000
    });
  }
};
</script>

<style scoped>
.title {
  font-size: 20px;
}
</style>
