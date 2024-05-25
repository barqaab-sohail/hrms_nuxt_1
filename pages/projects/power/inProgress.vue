<script setup>
definePageMeta({
  middleware: "auth",
});
</script>
<template>
  <div>
    <ProjectList title="Inprogress Power Projects" endpoint="/api/projects/1/2" dataId="inprogress_power_projects" titleColor="text-red"/>
  </div>
</template>