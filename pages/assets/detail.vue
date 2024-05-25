<template>
  <div>
    <h1 class="mb-2 mt-0 text-5xl font-medium leading-tight uppercase text-primary">BARQAAB Asset Count</h1>
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
    </v-data-table>
  </div>
</template>
<script setup>
definePageMeta({
  middleware: "auth",
});

const nuxtApp = useNuxtApp();
const search = ref("");

const config = useRuntimeConfig();

const { data, pending, refresh } = await useAsyncData(
  "assets",
  () =>
    $fetch(`${config.public.baseURL}/api/assetSubClasses`, {
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
  { title: "Asset Name", value: "name" },
  { title: "Quantity", value: "count" },
];

const refreshPage = () => {
  reloadNuxtApp;
};
const handleClick = async (event, row) => {
  await navigateTo(`/assets/subClass/${row.item.id}`);
};
</script>
