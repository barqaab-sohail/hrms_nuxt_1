<script setup>
const route = useRoute();
</script>
<template>
  <span class="text-green-950 font-bold">HR</span>
  <!-- <li class="mb-1 group">
    <NuxtLink
      to="/about"
      class="flex font-semibold items-center py-2 px-4 text-gray-900 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100"
    >
      <i class="ri-home-2-line mr-3 text-lg"></i>
      <span
        class="text-sm"
        :class="[route.name === 'about' ? 'text-red-600' : '']"
        >About</span
      >
    </NuxtLink>
  </li> -->
  <li
    class="mb-1 group"
    :class="[
      route.name === 'employees-list' || route.name === 'employees-id'
        ? 'selected'
        : '',
    ]"
  >
    <a
      href=""
      class="flex font-semibold items-center py-2 px-4 text-gray-900 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100 sidebar-dropdown-toggle"
    >
      <i class="mr-3 text-lg">
        <Icon name="fluent-emoji-high-contrast:man-office-worker" color="green"
      /></i>

      <span class="text-sm">Employees</span>
      <i class="ri-arrow-right-s-line ml-auto group-[.selected]:rotate-90"></i>
    </a>
    <ul class="pl-7 mt-2 hidden group-[.selected]:block">
      <li class="mb-4">
        <NuxtLink
          class="text-gray-900 text-sm flex items-center hover:text-[#f84525] before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3"
          to="/employees/list"
          :class="[route.name === 'employees-list' ? 'text-red-600' : '']"
          >All Employees</NuxtLink
        >
      </li>
      <!-- <li class="mb-4">
            <NuxtLink
              class="text-gray-900 text-sm flex items-center hover:text-[#f84525] before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3"
              to="/about"
              >About</NuxtLink
            >
          </li>
          <li class="mb-4">
            <a
              href=""
              class="text-gray-900 text-sm flex items-center hover:text-[#f84525] before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3"
              >Categories</a
            >
          </li> -->
    </ul>
  </li>
  <!-- <li class="mb-1 group">
        <a
          href=""
          class="flex font-semibold items-center py-2 px-4 text-gray-900 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100"
        >
          <i class="bx bx-list-ul mr-3 text-lg"></i>
          <span class="text-sm">Activities</span>
        </a>
      </li> -->
</template>
