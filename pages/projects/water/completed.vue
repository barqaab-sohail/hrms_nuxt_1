<script setup>
definePageMeta({
  middleware: "auth",
});
</script>
<template>
  <div>
    <ProjectList title="Completed Water Projects" endpoint="/api/projects/2/1" dataId="completed_water_projects" titleColor="text-primary"/>
  </div>
</template>