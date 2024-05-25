<script setup>
definePageMeta({
  middleware: "auth",
});
</script>
<template>
  <div>
    <ProjectList title="Inprogress Water Projects" endpoint="/api/projects/1/1" dataId="inprogress_water_projects" titleColor="text-primary"/>
  </div>
</template>