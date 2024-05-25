<script setup>
definePageMeta({
  middleware: "auth",
});
</script>
<template>
  <div>
    <ProjectList title="Completed Power Projects" endpoint="/api/projects/2/2" dataId="completed_power_projects" titleColor="text-red"/>
  </div>
</template>