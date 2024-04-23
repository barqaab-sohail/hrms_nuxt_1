<script setup>
const route = useRoute();
console.log("route" + route.name);
const employeeItems = [
  {
    icon: "mdi-inbox",
    text: "Inbox",
  },
  {
    icon: "mdi-star",
    text: "Star",
  },
  {
    icon: "mdi-send",
    text: "Send",
  },
  {
    icon: "mdi-email-open",
    text: "Drafts",
  },
];
const selectedItem = 1;
</script>
<template>
  <div
    class="fixed left-0 top-0 w-64 h-full bg-[#f8f4f3] p-4 z-50 sidebar-menu transition-transform"
  >
    <a href="#" class="flex items-center pb-4 border-b border-b-gray-800">
      <h2 class="font-bold text-2xl">
        BARQAAB
        <span class="bg-[#f84525] text-white px-2 rounded-md">MIS</span>
      </h2>
    </a>

    <ul class="mt-4">
      <span class="text-gray-400 font-bold">HR</span>
      <li class="mb-1 group">
        <NuxtLink
          to="/dashboard"
          class="flex font-semibold items-center py-2 px-4 text-gray-900 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100"
        >
          <i class="ri-home-2-line mr-3 text-lg"></i>
          <span
            class="text-sm"
            :class="[route.name === 'dashboard' ? 'text-red-600' : '']"
            >Dashboard</span
          >
        </NuxtLink>
      </li>
      <li class="mb-1 group">
        <a
          href=""
          class="flex font-semibold items-center py-2 px-4 text-gray-900 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100 sidebar-dropdown-toggle"
        >
          <i class="bx bx-user mr-3 text-lg"></i>
          <span class="text-sm">Employees</span>
          <i
            class="ri-arrow-right-s-line ml-auto group-[.selected]:rotate-90"
          ></i>
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
            <a
              href=""
              class="text-gray-900 text-sm flex items-center hover:text-[#f84525] before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3"
              >All Projects</a
            >
          </li>
          <li class="mb-4">
            <a
              href=""
              class="text-gray-900 text-sm flex items-center hover:text-[#f84525] before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3"
              >In Progress Projects</a
            >
          </li>
          <li class="mb-4">
            <a
              href=""
              class="text-gray-900 text-sm flex items-center hover:text-[#f84525] before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3"
              >Completed Projects</a
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
            <a
              href=""
              class="text-gray-900 text-sm flex items-center hover:text-[#f84525] before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3"
              >All Projects</a
            >
          </li>
          <li class="mb-4">
            <a
              href=""
              class="text-gray-900 text-sm flex items-center hover:text-[#f84525] before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3"
              >In Progress Projects</a
            >
          </li>
          <li class="mb-4">
            <a
              href=""
              class="text-gray-900 text-sm flex items-center hover:text-[#f84525] before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3"
              >Completed Projects</a
            >
          </li>
        </ul>
      </li>
      <!-- <li class="mb-1 group">
        <a
          href=""
          class="flex font-semibold items-center py-2 px-4 text-gray-900 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100"
        >
          <i class="bx bx-archive mr-3 text-lg"></i>
          <span class="text-sm">Archive</span>
        </a>
      </li> -->
      <!-- <span class="text-gray-400 font-bold">PERSONAL</span>
      <li class="mb-1 group">
        <a
          href=""
          class="flex font-semibold items-center py-2 px-4 text-gray-900 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100"
        >
          <i class="bx bx-bell mr-3 text-lg"></i>
          <span class="text-sm">Notifications</span>
          <span
            class="md:block px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-red-600 bg-red-200 rounded-full"
            >5</span
          >
        </a>
      </li>
      <li class="mb-1 group">
        <a
          href=""
          class="flex font-semibold items-center py-2 px-4 text-gray-900 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100"
        >
          <i class="bx bx-envelope mr-3 text-lg"></i>
          <span class="text-sm">Messages</span>
          <span
            class="md:block px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-green-600 bg-green-200 rounded-full"
            >2 New</span
          >
        </a>
      </li> -->
    </ul>
  </div>
  <div
    class="fixed top-0 left-0 w-full h-full bg-black/50 z-40 md:hidden sidebar-overlay"
  ></div>
</template>
