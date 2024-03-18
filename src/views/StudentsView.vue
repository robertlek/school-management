<template>
  <DataTable :value="state.students">
    <Column field="id" header="Id"></Column>
    <Column field="firstName" header="First Name"></Column>
    <Column field="lastName" header="Last Name"></Column>
    <Column field="dateOfBirth" header="Date of Birth">
      <template #body="slotProps">
        {{ new Date(slotProps.data.dateOfBirth) }}
      </template>
    </Column>
  </DataTable>
</template>

<script setup lang="ts">
import { useStudentsStore } from "@/stores/StudentsStore";
import { reactive, onMounted } from "vue";

import DataTable from "primevue/datatable";
import Column from "primevue/column";

const { getAllStudents } = useStudentsStore();

onMounted(async () => {
  state.students = await getAllStudents();
});

const state = reactive({
  students: []
});
</script>
