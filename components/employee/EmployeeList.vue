<template>
  <div>
    <div dir="rtl" class="mr-10">
      <v-btn @click="refresh" color="primary"
        >Refresh
        <v-progress-circular color="white" indeterminate v-if="pending"
      /></v-btn>
    </div>
    <div>
      <v-text-field
        v-model="search"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </div>
    <v-data-table
      v-if="data != null"
      dense
      :headers="headers"
      :items="data"
      :search="search"
      append-icon="search"
      :item-class="itemRowBackground"
      @click:row="handleClick"
    >
      <template v-slot:item.status="{ value }">
        <v-chip :color="getStatus(value)">
          {{ value }}
        </v-chip>
      </template>
    </v-data-table>
  </div>
</template>
<script setup>
const getStatus = (calories) => {
  if (calories == "Active") return "green";
  else return "red";
};
const itemRowBackground = (item) => {
  return item.status === "Active" ? "style-1" : "style-2";
};

const nuxtApp = useNuxtApp();
const search = ref("");
// const dataHeader = {
//   Authorization: `Bearer ${localStorage.getItem("token")}`,
//   "Content-Type": "application/json",
// };
const handleClick = async (event, row) => {
  await navigateTo(`/employees/${row.item.id}`);
};
const config = useRuntimeConfig();

const { data, pending, refresh } = await useAsyncData(
  "employeeItem",
  () =>
    $fetch(`${config.public.baseURL}/api/employees`, {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${useState("token").value}`,
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
<style>
.style-1 {
  background-color: rgb(215, 215, 44);
}
.style-2 {
  background-color: rgb(114, 114, 67);
}
</style>
