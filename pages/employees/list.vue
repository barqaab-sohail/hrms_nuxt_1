<script setup>
definePageMeta({
  middleware: "auth",
});
</script>
<template>
  <div>
    <h1 class="mb-2 mt-0 text-5xl font-medium leading-tight uppercase text-primary">Employees List</h1>
    <EmployeeList />
  </div>
</template>
