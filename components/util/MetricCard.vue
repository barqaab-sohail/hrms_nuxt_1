<script setup>
const color = useAttrs().color;
const title = useAttrs().title;
const amount = useAttrs().amount;
const icon = useAttrs().icon;
const iconColor = useAttrs().iconColor;
const firstColor = `bg-gradient-to-b from-${color}-200 to-${color}-100 border-b-4 border-${color}-600 rounded-lg shadow-xl p-5`;
const secondColor = `rounded-full p-5 bg-${color}-600`;
</script>
<template>
  <!--Metric Card-->
  <div :class="firstColor">
    <div class="flex flex-row items-center">
      <div class="flex-shrink pr-4">
        <Icon :name="icon" :color="iconColor" size="60" />
        <!-- <div :class="secondColor">
          <i class="fa fa-wallet fa-2x fa-inverse"></i>
        </div> -->
      </div>
      <div class="flex-1 text-right md:text-center">
        <h5 class="font-bold uppercase text-gray-600">
          {{ title }}
        </h5>
        <h3 class="font-bold text-3xl">
          {{ amount }}
          <span class="text-green-500"><i class="fas fa-caret-up"></i></span>
        </h3>
      </div>
    </div>
  </div>
  <!--/Metric Card-->
</template>
