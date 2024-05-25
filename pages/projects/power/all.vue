<script setup>
definePageMeta({
  middleware: "auth",
});
</script>
<template>
  <div>
    <ProjectList title="All Power Projects" endpoint="/api/projects/0/2" dataId="all_power_projects" titleColor="text-red"/>
  </div>
</template>