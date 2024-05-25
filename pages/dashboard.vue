<script setup>
const nuxtApp = useNuxtApp();
const config = useRuntimeConfig();
definePageMeta({
  middleware: "auth",
});

const { data, pending, refresh } = await useAsyncData(
  "chart",
  () =>
    $fetch(`${config.public.baseURL}/api/charts`, {
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
// const { data } = await useFetch(
//   `${config.public.baseURL}/api/charts`,
//   {
//     headers: {
//       accept: "application/json",
//       Authorization: `Bearer ${useState("token").value}`,
//     },
//   },
//   {
//     getCachedData: (key) =>
//       nuxtApp.payload.data[key] || nuxtApp.static.data[key],
//   }
// );

import { PieChart, DoughnutChart } from "vue-chart-3";
const options = {
  plugins: {
    legend: {
      position: "left",
    },
  },
};
const categoryData = {
  labels: Object.keys(data.value.employeeCategoryChart),
  datasets: [
    {
      data: Object.values(data.value.employeeCategoryChart),
      backgroundColor: ["#77CEFF", "#0079AF", "#123E6B"],
    },
  ],
};
const departmentData = {
  labels: Object.keys(data.value.departmentChart),
  datasets: [
    {
      data: Object.values(data.value.departmentChart),
      backgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(54, 162, 235)",
        "rgb(255, 205, 86)",
      ],
    },
  ],
};
const employeeSkillData = {
  labels: Object.keys(data.value.employeeSkillChart),
  datasets: [
    {
      data: Object.values(data.value.employeeSkillChart),
      backgroundColor: ["#39a770", "#0079AF", "#123E6B"],
    },
  ],
};
const ageData = {
  labels: Object.keys(data.value.employeeAgeChart),
  datasets: [
    {
      data: Object.values(data.value.employeeAgeChart),
      backgroundColor: ["green", "blue", "lightBlue", "orange", "red"],
    },
  ],
};
</script>
<template>
  <div>
    <div v-if="pending.value">Loading.....</div>
    <div v-else>
      <h1 class="mb-2 mt-0 text-5xl font-medium leading-tight uppercase text-primary">Dashboard</h1>
      <div dir="rtl" class="mr-10 mb-2">
        <v-btn @click="refresh" color="primary"
          >Refresh
          <v-progress-circular color="white" indeterminate v-if="pending"
        /></v-btn>
      </div>
      <div class="grid grid-cols-2 gap-4">
        <div class="border-2 items-center">
          <PieChart :chartData="categoryData" :options="options" />
        </div>
        <div class="border-2 items-center">
          <div class="border-2 items-center">
            <DoughnutChart :chartData="departmentData" :options="options" />
          </div>
        </div>
        <div class="border-2 items-center">
          <div class="border-2 items-center">
            <PieChart :chartData="employeeSkillData" :options="options" />
          </div>
        </div>
        <div class="border-2 items-center">
          <div class="border-2 items-center">
            <PieChart :chartData="ageData" :options="options" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
