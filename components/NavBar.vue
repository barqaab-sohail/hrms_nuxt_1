import { FullScreen } from '#build/components';
<template>
  <div>
    <!-- navbar -->
    <div
      class="py-2 px-6 bg-[#f8f4f3] flex items-center shadow-md shadow-black/5 sticky top-0 left-0 z-30"
    >
      <button
        type="button"
        class="text-lg text-gray-900 font-semibold sidebar-toggle"
      >
        <i class="ri-menu-line"></i>
      </button>

      <ul class="ml-auto flex items-center">
        <FullScreen />
        <User />
      </ul>
    </div>
    <!-- end navbar -->
  </div>
</template>
