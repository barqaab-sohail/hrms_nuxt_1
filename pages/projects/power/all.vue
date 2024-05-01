<template>
  <div>
    <h1>All Power Projects</h1>
    <div dir="rtl" class="mr-10 mb-2">
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
      dense
      :headers="headers"
      :items="data"
      :search="search"
      append-icon="search"
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
const getStatus = (status) => {
  if (status == "Completed") return "green";
  else return "red";
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
  "all_power_projects",
  () =>
    $fetch(`${config.public.baseURL}/api/projects/0/2`, {
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
console.log(data);
const headers = [
  { title: "Project No", value: "project_no" },
  { title: "Project Name", value: "name" },
  { title: "Client Name", value: "client" },
  { title: "Comencement Date", value: "commencement_date" },
  { title: "Role", value: "role" },
  { title: "Division", value: "division" },
  { title: "Project Status", value: "status" },
];

const refreshPage = () => {
  reloadNuxtApp;
};
// function filter(value, search, item) {
//   console.log(item.key);
//   return String(item.full_name).toLowerCase().includes(search);
// }
</script>
