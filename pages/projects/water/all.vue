<script setup>
definePageMeta({
  middleware: "auth",
});
</script>
<template>
  <div>
    <ProjectList title="All Water Projects" endpoint="/api/projects/0/1" dataId="all_water_projects" titleColor="text-primary"/>
  </div>
</template>