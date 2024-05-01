<script setup>
const route = useRoute();
</script>
<template>
  <div>
    <li class="mb-1 group">
      <NuxtLink
        to="/dashboard"
        class="flex font-semibold items-center py-2 px-4 text-gray-900 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100"
      >
        <i class="mr-3 text-lg">
          <Icon name="dashicons:admin-home" color="blue"
        /></i>
        <span
          class="text-sm"
          :class="[route.name === 'dashboard' ? 'text-red-600' : '']"
          >Dashboard</span
        >
      </NuxtLink>
    </li>
  </div>
</template>
