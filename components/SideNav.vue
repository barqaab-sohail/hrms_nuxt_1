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
      <LayoutDashboard />
      <LayoutEmployee />
      <LayoutProject />
      <LayoutAsset />
    </ul>
  </div>
  <div
    class="fixed top-0 left-0 w-full h-full bg-black/50 z-40 md:hidden sidebar-overlay"
  ></div>
</template>
