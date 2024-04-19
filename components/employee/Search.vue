<script setup>
const message = ref("");
</script>
<template>
  <div>
    <form class="py-3 px-4 flex items-center">
      <label class="sr-only">Search</label>
      <div class="relative w-full">
        <p>Message is: {{ message }}</p>
        <input
          type="text"
          placeholder="Search"
          class="bg-gray-50 border border-gray-300"
          v-model="message"
        />
      </div>
    </form>
  </div>
</template>
