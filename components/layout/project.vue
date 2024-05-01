<script setup>
const route = useRoute();
</script>
<template>
  <div>
    <span class="text-gray-400 font-bold">PROJECTS </span>
    <li class="mb-1 group">
      <a
        href=""
        class="flex font-semibold items-center py-2 px-4 text-gray-900 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100 sidebar-dropdown-toggle"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.2em"
          height="1.2em"
          viewBox="0 0 24 24"
          class="mr-4"
        >
          <path
            fill="#ff0000"
            d="m5.18 5.45l-1.78-.9L4.66 2h8.47l1.27 2.55l-1.78.89L11.9 4h-6zM15.5 8H11l-.8-3H7.6l-.79 3H2.28L1 10.55l1.79.89L3.5 10h10.78l.72 1.45l1.79-.89zm-.83 14H12.6l-.24-.9l-3.46-5.2l-3.47 5.2l-.23.9H3.13L6 11h2.09l-.36 1.35L8.9 14.1l1.16-1.75L9.71 11h2.07zM8.3 15l-.9-1.35l-1.18 4.48zm3.28 3.12l-1.18-4.48L9.5 15zM23 16l-4-4v3h-4v2h4v3z"
          />
        </svg>

        <span class="text-sm">Power</span>
        <i
          class="ri-arrow-right-s-line ml-auto group-[.selected]:rotate-90"
        ></i>
      </a>
      <ul class="pl-7 mt-2 hidden group-[.selected]:block">
        <li class="mb-4">
          <NuxtLink
            class="text-gray-900 text-sm flex items-center hover:text-[#f84525] before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3"
            to="/projects/power/all"
            :class="[route.name === 'projects-power-all' ? 'text-red-600' : '']"
          >
            All Projects</NuxtLink
          >
        </li>
        <li class="mb-4">
          <NuxtLink
            class="text-gray-900 text-sm flex items-center hover:text-[#f84525] before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3"
            to="/projects/power/inProgress"
            :class="[
              route.name === 'projects-power-inProgress' ? 'text-red-600' : '',
            ]"
          >
            In Progress Projects</NuxtLink
          >
        </li>
        <li class="mb-4">
          <NuxtLink
            class="text-gray-900 text-sm flex items-center hover:text-[#f84525] before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3"
            to="/projects/power/completed"
            :class="[
              route.name === 'projects-power-completed' ? 'text-red-600' : '',
            ]"
          >
            Completed Projects</NuxtLink
          >
        </li>
      </ul>
    </li>
    <li class="mb-1 group">
      <a
        href=""
        class="flex font-semibold items-center py-2 px-4 text-gray-900 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100 sidebar-dropdown-toggle"
      >
        <v-icon color="primary" class="mr-3">mdi-water</v-icon>
        <span class="text-sm">Water</span>
        <i
          class="ri-arrow-right-s-line ml-auto group-[.selected]:rotate-90"
        ></i>
      </a>
      <ul class="pl-7 mt-2 hidden group-[.selected]:block">
        <li class="mb-4">
          <NuxtLink
            class="text-gray-900 text-sm flex items-center hover:text-[#f84525] before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3"
            to="/projects/water/all"
            :class="[route.name === 'projects-water-all' ? 'text-red-600' : '']"
          >
            All Projects</NuxtLink
          >
        </li>
        <li class="mb-4">
          <NuxtLink
            class="text-gray-900 text-sm flex items-center hover:text-[#f84525] before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3"
            to="/projects/water/inProgress"
            :class="[
              route.name === 'projects-water-InProgress' ? 'text-red-600' : '',
            ]"
          >
            In Progress Projects</NuxtLink
          >
        </li>
        <li class="mb-4">
          <NuxtLink
            class="text-gray-900 text-sm flex items-center hover:text-[#f84525] before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3"
            to="/projects/water/completed"
            :class="[
              route.name === 'projects-water-completed' ? 'text-red-600' : '',
            ]"
          >
            Completed Projects</NuxtLink
          >
        </li>
      </ul>
    </li>
  </div>
</template>
