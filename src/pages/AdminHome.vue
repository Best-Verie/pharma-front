<template>
  <AdminLayout v-show="store.isLoggedIn">
    <div
      class="flex items-center flex-col lg:flex-row justify-between px-10 pt-10"
    >
      <SummaryCard :summaries="summaries" />
    </div>
    <section class="px-10 mt-10">
      <Bar
        :chart-options="chartOptions"
        :chart-data="chartData"
        :chart-id="chartId"
        :dataset-id-key="datasetIdKey"
      />
    </section>
    <section class="flex flex-col xl:flex-row items-start justify-between">
      <div
        class="
          border border-gray-300
          rounded-lg
          mx-2
          xl:mx-10
          mt-10
          p-3
          w-full
          xl:w-1/2
        "
      >
        <h2 class="text-lg border-b border-gray-100 -mx-3 px-3 mb-5 pb-3">
          Earning reports
        </h2>
        <table class="w-full">
          <tr class="bg-gray-100 border-y border-gray-200">
            <th class="font-medium text-left pl-2">Date</th>
            <th class="font-medium text-left">Item count</th>
            <th class="font-medium text-left">Text</th>
            <th class="font-medium text-left">Earnings</th>
          </tr>
          <tr>
            <td class="pl-2 py-5">01 January</td>
            <td>50</td>
            <td class="text-red-500">-$70</td>
            <td>$15,000</td>
          </tr>
          <tr>
            <td class="pl-2 py-5">03 January</td>
            <td>50</td>
            <td class="text-red-500">-$70</td>
            <td>$15,000</td>
          </tr>
          <tr>
            <td class="pl-2 py-5">04 January</td>
            <td>50</td>
            <td class="text-red-500">-$70</td>
            <td>$15,000</td>
          </tr>
          <tr>
            <td class="pl-2 py-5">04 January</td>
            <td>50</td>
            <td class="text-red-500">-$70</td>
            <td>$15,000</td>
          </tr>
        </table>
      </div>
      <div
        class="
          border border-gray-300
          rounded-lg
          mx-5
          xl:mx-10
          mt-10
          p-3
          w-full
          xl:w-1/2
        "
      >
        <h2 class="text-lg border-b border-gray-100 -mx-3 px-3 mb-5 pb-3">
          Most popular products
        </h2>
        <table class="w-full">
          <tr class="bg-gray-100 border-y border-gray-200">
            <th class="font-medium text-left pl-2">Product</th>
            <th class="font-medium text-left">Price</th>
            <th class="font-medium text-left">Sell</th>
            <th class="font-medium text-left">Status</th>
            <th class="font-medium text-center">Actions</th>
          </tr>
          <tr>
            <td class="pl-2 flex py-4">
              <img
                src="../assets/img/facemasks.png"
                alt=""
                class="w-10 h-10 mr-5"
              />
              <div>
                <p>Facemasks</p>
                <p class="cursor-pointer">ID: 12345</p>
              </div>
            </td>
            <td>$50</td>
            <td>450</td>
            <td>
              <p class="text-amber-500 bg-yellow-100 rounded-full text-center">
                Stock
              </p>
            </td>
            <td class="flex items-center justify-around">
              <img src="../assets/icons/edit.svg" alt="" class="w-5 h-5 mr-5" />
              <img src="../assets/icons/delete.svg" alt="" class="w-5 h-5" />
            </td>
          </tr>
          <tr>
            <td class="pl-2 flex py-4">
              <img
                src="../assets/img/facemasks.png"
                alt=""
                class="w-10 h-10 mr-5"
              />
              <div>
                <p>Facemasks</p>
                <p class="cursor-pointer">ID: 12345</p>
              </div>
            </td>
            <td>$50</td>
            <td>450</td>
            <td>
              <p class="text-amber-500 bg-yellow-100 rounded-full text-center">
                Stock
              </p>
            </td>
            <td class="flex items-center justify-around">
              <img src="../assets/icons/edit.svg" alt="" class="w-5 h-5 mr-5" />
              <img src="../assets/icons/delete.svg" alt="" class="w-5 h-5" />
            </td>
          </tr>
          <tr>
            <td class="pl-2 flex py-4">
              <img
                src="../assets/img/facemasks.png"
                alt=""
                class="w-10 h-10 mr-5"
              />
              <div>
                <p>Facemasks</p>
                <p class="cursor-pointer">ID: 12345</p>
              </div>
            </td>
            <td>$50</td>
            <td>450</td>
            <td>
              <p class="text-amber-500 bg-yellow-100 rounded-full text-center">
                Stock
              </p>
            </td>
            <td class="flex items-center justify-around">
              <img src="../assets/icons/edit.svg" alt="" class="w-5 h-5 mr-5" />
              <img src="../assets/icons/delete.svg" alt="" class="w-5 h-5" />
            </td>
          </tr>
          <tr>
            <td class="pl-2 flex py-4">
              <img
                src="../assets/img/facemasks.png"
                alt=""
                class="w-10 h-10 mr-5"
              />
              <div>
                <p>Facemasks</p>
                <p class="cursor-pointer">ID: 12345</p>
              </div>
            </td>
            <td>$50</td>
            <td>450</td>
            <td>
              <p class="text-amber-500 bg-yellow-100 rounded-full text-center">
                Stock
              </p>
            </td>
            <td class="flex items-center justify-around">
              <img src="../assets/icons/edit.svg" alt="" class="w-5 h-5 mr-5" />
              <img src="../assets/icons/delete.svg" alt="" class="w-5 h-5" />
            </td>
          </tr>
        </table>
      </div>
    </section>
  </AdminLayout>
</template>

<script lang="ts">
import SummaryCard from "../components/SummaryCard.vue";
import Summary from "../types/summary";
import { onMounted, ref, watchEffect } from "vue";
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import AdminLayout from "../components/AdminLayout.vue";
import { authStore } from "../store/authStore";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);
export default {
  components: { SummaryCard, Bar, AdminLayout },
  props: {
    chartId: {
      type: String,
      default: "bar-chart",
    },
    datasetIdKey: {
      type: String,
      default: "label",
    },
  },
  data() {
    return {
      chartData: {
        labels: [
          "01",
          "02",
          "03",
          "04",
          "05",
          "06",
          "07",
          "08",
          "09",
          "10",
          "11",
          "12",
          "13",
          "14",
          "15",
          "16",
          "17",
          "18",
          "19",
          "20",
          "21",
          "22",
          "23",
          "24",
          "25",
          "26",
          "27",
          "28",
          "29",
          "30",
          "31",
        ],
        datasets: [
          {
            data: [
              0, 100, 200, 300, 400, 100, 300, 200, 0, 200, 100, 300, 200, 200,
              100, 300, 0, 0, 100, 200, 300, 400, 100, 300, 200, 0, 200, 100,
              300, 200, 0, 100, 300, 200,
            ],
            backgroundColor: [
              "#9FC1FA",
              "#9FC1FA",
              "#9FC1FA",
              "#9FC1FA",
              "#9FC1FA",
            ],
          },
        ],
      },
      chartOptions: {
        responsive: true,
      },
    };
  },
  setup() {
    const store = authStore();

    const summaries = ref<Summary[]>([
      {
        title: "$20,000",
        description: "Weekly sales",
      },
      {
        title: "520",
        description: "Orders placed",
      },
      {
        title: "82.8%",
        description: "Conversion Rate",
      },
      {
        title: "$80.5",
        description: "Avg. Value",
      },
    ]);

    return {
      summaries,
      store,
    };
  },
};
</script>

<style>
#bar-chart {
  height: 25rem !important;
}
</style>
