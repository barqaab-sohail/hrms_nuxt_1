<script setup>
definePageMeta({
  middleware: "auth",
});
</script>
<template>
  <div>
    <h1>Employees List</h1>
    <EmployeeList />
  </div>
</template>
