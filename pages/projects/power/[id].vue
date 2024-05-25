<script setup>
const route = useRoute();
const search = ref("");
const status = ref(false);
const config = useRuntimeConfig();
const { data, pending } = useAsyncData(`project_${route.params.id}`, () =>
  $fetch(`${config.public.baseURL}/api/project/${route.params.id}`, {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${useState("token").value}`,
    },
  })
);
const headers = [
  { title: "Document Name", key: "description" },
  { title: "Reference", key: "reference_no" },
  { title: "Date", key: "document_date" },
  { title: "Size (MB)", key: "size" },
  {
    title: "View",
    key: "full_path",
  },
];

status.value = pending;

const handleClick = (event, row) => {
  window.open(row.item.full_path, "_blank");
  console.log(row.item.full_path);
};
</script>
<template>
  <div v-if="status.value">Loading.....</div>
  <div v-else>
    <v-btn
      @click="$router.back()"
      variant="elevated"
      prepend-icon="mdi-arrow-left"
      color="primary"
      >Back</v-btn
    >
    <div class="overflow-x-scroll my-5 p-5">
      <div class="md:flex no-wrap md:-mx-2">
        <!-- Left Side -->
        <div class="w-full md:w-3/12 md:mx-2">
          <!-- Profile Card -->
          <div
            class="bg-white p-3 border-t-4 border-green-400"
            :class="[
              data.status === 'Completed'
                ? 'border-blue-400'
                : 'border-green-400',
            ]"
          >
            <div class="p-3">
              <h1 class="text-gray-900 font-bold text-xl leading-8 my-1">
                {{ data.name }}
              </h1>
              <h2 class="text-gray-900 text-xl leading-8 my-1">
                Client: {{ data.client }}
              </h2>
              <ul
                class="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm"
              >
                <li class="flex items-center py-3">
                  <span>Status</span>
                  <span class="ml-auto"
                    ><span
                      class="py-1 px-2 rounded text-white text-sm"
                      :class="[
                        data.status === 'Completed'
                          ? 'bg-blue-500'
                          : 'bg-green-500',
                      ]"
                      >{{ data.status }}</span
                    ></span
                  >
                </li>
                <li class="flex items-center py-3">
                  <span>Date Commencement</span>
                  <span class="ml-auto">{{ data.commencement_date }}</span>
                </li>
                <li class="flex items-center py-3">
                  <span>Contractual Completion Date</span>
                  <span class="ml-auto">{{
                    data.contractualCompletionDate
                  }}</span>
                </li>
                <li class="flex items-center py-3">
                  <span>Total Consultancy Cost</span>
                  <span class="ml-auto">{{ data.totalConsultancy }}</span>
                </li>
              </ul>
            </div>
          </div>
          <!-- End of profile card -->
          <div class="my-4"></div>
          <!-- Friends card -->
          <div class="bg-white p-3 hover:shadow">
            <div
              class="flex items-center space-x-3 font-semibold text-gray-900 text-xl leading-8"
            >
              <span>Charts</span>
            </div>

            <!-- Experience and education -->
            <div class="bg-white p-3 shadow-sm rounded-sm">
              <div class="grid grid-cols-2">
                <div>
                  <div
                    class="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3"
                  >
                    <span clas="text-green-500">
                      <svg
                        class="h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                    </span>
                    <span class="tracking-wide"></span>
                  </div>
                  <ul class="list-inside space-y-2"></ul>
                </div>
                <div>
                  <div
                    class="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3"
                  >
                    <span clas="text-green-500">
                      <svg
                        class="h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path
                          fill="#fff"
                          d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                        />
                      </svg>
                    </span>
                    <span class="tracking-wide"></span>
                  </div>
                  <ul class="list-inside space-y-2"></ul>
                </div>
              </div>
              <!-- End of Experience and education grid -->
            </div>
          </div>
          <!-- End of friends card -->
        </div>
        <!-- Right Side -->
        <div class="w-full md:w-6/12 mx-2 h-64">
          <!-- Profile tab -->

          <div
            class="block w-full text-blue-800 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4"
          >
            Project Documents
          </div>

          <!-- Employee Documentation -->
          <div class="bg-white p-3 shadow-sm rounded-sm">
            <div class="grid">
              <v-text-field
                v-model="search"
                append-icon="search"
                label="Search"
                single-line
                hide-details
              ></v-text-field>
              <v-data-table
                :headers="headers"
                :items="data.documents"
                :search="search"
                @click:row="handleClick"
              >
                <template #[`item.full_path`]="{ item }">
                  <v-icon color="primary">mdi-file-pdf</v-icon>
                </template>
              </v-data-table>
            </div>
            <!-- End Employee Documentation -->
          </div>
          <!-- End of profile tab -->
        </div>
      </div>
    </div>
  </div>
</template>
<style></style>
