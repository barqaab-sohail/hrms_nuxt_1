<script setup>
const nuxtApp = useNuxtApp();
const config = useRuntimeConfig();
definePageMeta({
  middleware: "auth",
});

const { data, pending } = await useAsyncData(
  "chat",
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

import { PieChart } from "vue-chart-3";

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
      backgroundColor: ["red", "#2683e5", "orange"],
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
    <h1>Dashboard</h1>
    <div class="grid grid-cols-2 gap-4">
      <div class="border-2 items-center">
        <PieChart :chartData="categoryData" />
      </div>
      <div class="border-2 items-center">
        <div class="border-2 items-center">
          <PieChart :chartData="departmentData" />
        </div>
      </div>
      <div class="border-2 items-center">
        <div class="border-2 items-center">
          <PieChart :chartData="employeeSkillData" />
        </div>
      </div>
      <div class="border-2 items-center">
        <div class="border-2 items-center">
          <PieChart :chartData="ageData" />
        </div>
      </div>
    </div>
  </div>
</template>
