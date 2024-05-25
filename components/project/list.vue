<script setup>
const title = useAttrs().title;
const titleColor = useAttrs().titleColor;
const endpoint = useAttrs().endpoint;
const dataId = useAttrs().dataId;

definePageMeta({
  middleware: "auth",
});
const getStatus = (status) => {
  if (status == "Completed") return "blue";
  else return "green";
};

const nuxtApp = useNuxtApp();
const search = ref("");

const handleClick = async (event, row) => {
  await navigateTo(`/projects/power/${row.item.id}`);
};
const config = useRuntimeConfig();

const { data, pending, refresh } = await useAsyncData(
  `${dataId}`,
  () =>
    $fetch(`${config.public.baseURL}${endpoint}`, {
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
  { title: "Project No", value: "project_no" },
  { title: "Project Name", value: "name" },
  { title: "Client Name", value: "client" },
  { title: "Comencement Date", value: "commencement_date" },
  { title: "Role", value: "role" },
  { title: "Division", value: "division" },
  { title: "Project Status", value: "status" },
];

</script>
<template>
  <div>
    <h1 class="mb-2 mt-0 text-5xl font-medium leading-tight uppercase" :class="titleColor">{{ title }}</h1>
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
