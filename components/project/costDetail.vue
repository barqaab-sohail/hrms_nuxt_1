<script setup>
const data = useAttrs().projectData;
</script>
<template>
  <div class="flex flex-wrap grid grid-cols-5 gap-2">
    <div class="w-full md:w-1/2 xl:w-1/3 p-6">
      <!--Metric Card-->
      <div
        class="bg-gradient-to-b from-green-200 to-green-100 border-b-4 border-green-600 rounded-lg shadow-xl p-5"
      >
        <div class="flex flex-row items-center">
          <div class="flex-shrink pr-4">
            <div class="rounded-full p-5 bg-green-600">
              <i class="fa fa-wallet fa-2x fa-inverse"></i>
            </div>
          </div>
          <div class="flex-1 text-right md:text-center">
            <h5 class="font-bold uppercase text-gray-600">
              Total Consultancy Cost
            </h5>
            <h3 class="font-bold text-3xl">
              Rs.12345
              <span class="text-green-500"
                ><i class="fas fa-caret-up"></i
              ></span>
            </h3>
          </div>
        </div>
      </div>
      <!--/Metric Card-->
    </div>
    <div class="w-full md:w-1/2 xl:w-1/3 p-6">
      <!--Metric Card-->
      <div
        class="bg-gradient-to-b from-pink-200 to-pink-100 border-b-4 border-pink-500 rounded-lg shadow-xl p-5"
      >
        <div class="flex flex-row items-center">
          <div class="flex-shrink pr-4">
            <div class="rounded-full p-5 bg-pink-600">
              <i class="fas fa-users fa-2x fa-inverse"></i>
            </div>
          </div>
          <div class="flex-1 text-right md:text-center">
            <h5 class="font-bold uppercase text-gray-600">Total Invoices</h5>
            <h3 class="font-bold text-3xl">
              249
              <span class="text-pink-500"
                ><i class="fas fa-exchange-alt"></i
              ></span>
            </h3>
          </div>
        </div>
      </div>
      <!--/Metric Card-->
    </div>
    <div class="w-full md:w-1/2 xl:w-1/3 p-6">
      <!--Metric Card-->
      <div
        class="bg-gradient-to-b from-yellow-200 to-yellow-100 border-b-4 border-yellow-600 rounded-lg shadow-xl p-5"
      >
        <div class="flex flex-row items-center">
          <div class="flex-shrink pr-4">
            <div class="rounded-full p-5 bg-yellow-600">
              <i class="fas fa-user-plus fa-2x fa-inverse"></i>
            </div>
          </div>
          <div class="flex-1 text-right md:text-center">
            <h5 class="font-bold uppercase text-gray-600">Payment Received</h5>
            <h3 class="font-bold text-3xl">
              2
              <span class="text-yellow-600"
                ><i class="fas fa-caret-up"></i
              ></span>
            </h3>
          </div>
        </div>
      </div>
      <!--/Metric Card-->
    </div>
    <div class="w-full md:w-1/2 xl:w-1/3 p-6">
      <!--Metric Card-->
      <div
        class="bg-gradient-to-b from-blue-200 to-blue-100 border-b-4 border-blue-500 rounded-lg shadow-xl p-5"
      >
        <div class="flex flex-row items-center">
          <div class="flex-shrink pr-4">
            <div class="rounded-full p-5 bg-blue-600">
              <i class="fas fa-server fa-2x fa-inverse"></i>
            </div>
          </div>
          <div class="flex-1 text-right md:text-center">
            <h5 class="font-bold uppercase text-gray-600">Pending Payment</h5>
            <h3 class="font-bold text-3xl">152 days</h3>
          </div>
        </div>
      </div>
      <!--/Metric Card-->
    </div>
    <div class="w-full md:w-1/2 xl:w-1/3 p-6">
      <!--Metric Card-->
      <div
        class="bg-gradient-to-b from-red-200 to-red-100 border-b-4 border-red-500 rounded-lg shadow-xl p-5"
      >
        <div class="flex flex-row items-center">
          <div class="flex-shrink pr-4">
            <div class="rounded-full p-5 bg-red-600">
              <i class="fas fa-inbox fa-2x fa-inverse"></i>
            </div>
          </div>
          <div class="flex-1 text-right md:text-center">
            <h5 class="font-bold uppercase text-gray-600">Status Upto</h5>
            <h3 class="font-bold text-3xl">
              3
              <span class="text-red-500"><i class="fas fa-caret-up"></i></span>
            </h3>
          </div>
        </div>
      </div>
      <!--/Metric Card-->
    </div>
  </div>
</template>
