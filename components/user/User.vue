<script setup>
import { getData, setData, removeItem } from "nuxt-storage/local-storage";
const props = defineProps(["name", "designation"]);
const name = getData("name");
const designation = getData("designation");
const picture = getData("picture");
async function logout() {
  setData("name", "");
  setData("designation", "");
  removeItem("token");
  await navigateTo("/login2");
}
</script>

<template>
  <div>
    <li class="dropdown ml-3">
      <button type="button" class="dropdown-toggle flex items-center">
        <div class="flex-shrink-0 w-10 h-10 relative">
          <div class="p-1 bg-white rounded-full focus:outline-none focus:ring">
            <img class="w-8 h-8 rounded-full" :src="picture" alt="" />
            <div
              class="top-0 left-7 absolute w-3 h-3 bg-lime-400 border-2 border-white rounded-full animate-ping"
            ></div>
            <div
              class="top-0 left-7 absolute w-3 h-3 bg-lime-500 border-2 border-white rounded-full"
            ></div>
          </div>
        </div>
        <div class="p-2 md:block text-left">
          <h2 class="text-sm font-semibold text-gray-800">{{ name }}</h2>
          <p class="text-xs text-gray-500">{{ designation }}</p>
        </div>
      </button>
      <ul
        class="dropdown-menu shadow-md shadow-black/5 z-30 hidden py-1.5 rounded-md bg-white border border-gray-100 w-full max-w-[140px]"
      >
        <li>
          <form method="POST" action="">
            <a
              role="menuitem"
              class="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-[#f84525] hover:bg-gray-50 cursor-pointer"
              @click.prevnet="logout"
            >
              Log Out
            </a>
          </form>
        </li>
      </ul>
    </li>
  </div>
</template>
