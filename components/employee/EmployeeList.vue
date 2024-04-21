<template>
  <div>
    <h1>testing</h1>
    <v-text-field
      v-model="search"
      append-icon="search"
      label="Search"
      single-line
      hide-details
    ></v-text-field>
    <v-progress-circular color="primary" indeterminate v-if="pending" />
    <v-data-table
      dense
      :headers="headers"
      :items="data"
      :search="search"
      append-icon="search"
      @click:row="handleClick"
    >
    </v-data-table>
  </div>
</template>
<script setup>
const nuxtApp = useNuxtApp();
const search = ref("");
// const dataHeader = {
//   Authorization: `Bearer ${localStorage.getItem("token")}`,
//   "Content-Type": "application/json",
// };
const handleClick = async (event, row) => {
  await navigateTo(`/employees/${row.item.id}`);
};
const { data } = await useAsyncData(
  "employeeItem",
  () =>
    $fetch(`http://localhost/hrms/api/employees`, {
      headers: {
        accept: "application/json",
        Authorization: `Bearer 32|SkrSxxDzYHpaI2QvubrSwz0ufXwiuiNcGEWWCyvF0af1e52f`,
      },
    }),
  {
    getCachedData: (key) =>
      nuxtApp.payload.data[key] || nuxtApp.static.data[key],
  }
);

const headers = [
  { title: "Employee Id", value: "employee_no" },
  { title: "Name", value: "full_name" },
  { title: "Designation", value: "designation" },
  { title: "CNIC", value: "cnic" },
  { title: "Date of Birth", value: "date_of_birth" },
  { title: "Date of Joining", value: "date_of_joining" },
  { title: "Salary", value: "salary.salary" },
  { title: "Salary Effective", value: "salary.effective_date" },
  { title: "Mobile", value: "mobile" },
  { title: "Status", value: "status" },
];

const refreshPage = () => {
  reloadNuxtApp;
};
// function filter(value, search, item) {
//   console.log(item.key);
//   return String(item.full_name).toLowerCase().includes(search);
// }
</script>
