<script setup>
const pagerefresh = () => {
  $nuxt.refresh();
};
</script>
<template>
  <div>
    <h1>Dashboard</h1>
    <v-btn @click="pagerefresh">Refresh</v-btn>
  </div>
</template>
