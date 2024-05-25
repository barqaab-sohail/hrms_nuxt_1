<script setup>
const route = useRoute();
const nuxtApp = useNuxtApp();
const search = ref("");

const config = useRuntimeConfig();

const { data, pending, refresh } = await useAsyncData(
  `assets_${route.params.id}`,
  () =>
    $fetch(`${config.public.baseURL}/api/asset/${route.params.id}`, {
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
  { title: "Asset Description", value: "name" },
  { title: "Location", value: "location" },
  { title: "Allocation", value: "allocation" },
  { title: "Picture", value: "picture" },
];
const handleClick = (event, row) => {
  window.open(row.item.picture, "_blank");
};
</script>

<template>
  <div>
    <div>
      <NuxtLink to="/assets/detail">
        <v-btn variant="elevated" prepend-icon="mdi-arrow-left" color="primary"
          >Back</v-btn
        >
      </NuxtLink>
    </div>
    <div class="mt-4">
      <h1 class="mb-2 mt-0 text-3xl font-medium leading-tight uppercase text-primary">Asset Sub Class Detail</h1>
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
        <template #[`item.picture`]="{ item }">
          <v-img :src="item.picture" width="60"></v-img>
        </template>
      </v-data-table>
    </div>
  </div>
</template>
