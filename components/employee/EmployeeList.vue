<template>
  <div>
    <input
      type="text"
      placeholder="Search"
      class="bg-gray-50 border border-gray-300"
      v-model="search"
    />
    <v-progress-circular color="primary" indeterminate v-if="pending" />
    <v-data-table
      dense
      :items="data"
      :search="search"
      :custom-filter="filter"
    ></v-data-table>
  </div>
</template>
<script setup>
const items = ref([]);

console.log(
  "it token from use state from employee List" + useState("token").value
);
const headers = {
  Authorization: `Bearer ${localStorage.getItem("token")}`,
  "Content-Type": "application/json",
};

const { data, pending, refresh } = await useAsyncData("item", () =>
  $fetch("http://localhost/hrms/api/employees", {
    headers: headers,
  })
);

const refreshPage = () => {
  reloadNuxtApp;
};
function filter(value, search, item) {
  return String(item.name).toLowerCase().includes(search);
}
</script>
