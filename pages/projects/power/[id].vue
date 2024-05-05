<script setup>
const nuxtApp = useNuxtApp();
const config = useRuntimeConfig();
const route = useRoute();
definePageMeta({
  middleware: "auth",
});

const { data: budget, pending } = await useAsyncData(`project_${route.params.id}`, () =>
  $fetch(`${config.public.baseURL}/api/project/${route.params.id}`, {
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

import { PieChart } from "vue-chart-3";
const options = {
  plugins: {
    legend: {
      position: "bottom",
    },
    title: {
      display: true,
      text: `Budget Utilization Chart updated upto ${budget.value.last_invoice}`,
    },
  },
};
const budgetData = {
  labels: ["Budget Utilization", "Remaining Budget"],
  datasets: [
    {
      data: [budget.value.budget_utilization, budget.value.remaining_budget],
      backgroundColor: ["#77CEFF", "#0079AF"],
    },
  ],
};
</script>
<template>
  <div>
    <!-- Start Cards -->
    <div>
     
    </div>
    <!-- End Cards -->
    <div v-if="pending.value">Loading.....</div>
    <div v-else>
      <v-btn
        @click="$router.back()"
        variant="elevated"
        prepend-icon="mdi-arrow-left"
        color="primary"
        >Back</v-btn
      >
      <h1>Project Detail {{ $route.params.id }}</h1>
      <div class="grid grid-cols-2 gap-4">
        <div class="border-2 items-center">
          <PieChart :chartData="budgetData" :options="options" />
        </div>
      </div>
    </div>
  </div>
</template>
