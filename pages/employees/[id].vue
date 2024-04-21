<script setup>
const route = useRoute();
const employee = ref();
const { data, pending } = useAsyncData("employee", () =>
  $fetch(`http://localhost/hrms/api/employee/${route.params.id}`, {
    headers: {
      accept: "application/json",
      Authorization: `Bearer 32|SkrSxxDzYHpaI2QvubrSwz0ufXwiuiNcGEWWCyvF0af1e52f`,
    },
  })
);
employee.value = data;
</script>
<template>
  <div v-if="!pending">
    <div>
      <div
        class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
      >
        <img class="rounded-t-lg" :src="employee.value.picture" alt="" />

        <div class="p-5">
          <h5
            class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
          >
            {{ employee.value.full_name }}
          </h5>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {{ employee.value.designation }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
