<template>
  <AdminLayout>
    <section class="px-10 pt-5">
      <div class="flex flex-col lg:flex-row items-center">
        <img
          class="w-20 h-20 rounded-full"
          src="https://images.unsplash.com/photo-1652437225670-f7969e367375?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1288&q=80"
          alt="Rounded avatar"
        />
        <div class="ml-5 mt-5 lg:mt-0">
          <p class="flex">
            <span class="font-bold mr-1">John</span>
            <span class="text-gray-500">Doe</span>
          </p>
          <p>
            <span class="text-gray-500">john.doe@gmail.com</span>
          </p>
        </div>
      </div>
      <div class="mt-16 flex flex-col lg:flex-row justify-between">
        <form
          class="lg:w-1/2 lg:mr-10 border border-stone-200 px-5 pb-5 rounded"
        >
          <p class="font-medium border-b border-stone-200 -mx-5 px-5 py-3 mb-5">
            Personal Information
          </p>
          <div class="mb-6 flex flex-col lg:flex-row items-center">
            <label class="block mb-2 text-sm font-medium text-gray-900 w-64"
              >Your Name</label
            >
            <input
              type="text"
              id="name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="John Doe"
              required
            />
          </div>
          <div class="mb-6 flex flex-col lg:flex-row items-center">
            <label class="block mb-2 text-sm font-medium text-gray-900 w-64"
              >Your email</label
            >
            <input
              type="email"
              id="email"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="John.doe@gmail.com"
              required
            />
          </div>
          <div class="mb-6 flex flex-col lg:flex-row items-center">
            <label class="block mb-2 text-sm font-medium text-gray-900 w-64"
              >Your Phone
            </label>
            <input
              type="text"
              id="phone"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="+250 078 000 000"
              required
            />
          </div>
          <div class="mb-6 flex flex-col lg:flex-row items-center">
            <label
              for="address"
              class="block mb-2 text-sm font-medium text-gray-900 w-64"
              >Your Address
            </label>
            <input
              type="text"
              id="phone"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Kigali, Rwanda"
              required
            />
          </div>
          <div class="mb-6 flex flex-col lg:flex-row items-center">
            <label
              for="password"
              class="block mb-2 text-sm font-medium text-gray-900 w-64"
              >Your password</label
            >
            <input
              type="password"
              id="password"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
            />
          </div>
          <button
            type="submit"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
        <div class="lg:w-1/2">
          <form class="mb-5 border border-stone-200 px-5 pb-5 rounded">
            <p
              class="font-medium border-b border-stone-200 -mx-5 px-5 py-3 mb-5"
            >
              Change Password
            </p>
            <div class="mb-6 flex flex-col lg:flex-row items-center">
              <label
                for="password"
                class="block mb-2 text-sm font-medium text-gray-900 w-64"
                >Current password</label
              >
              <input
                type="password"
                id="password"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                required
                placeholder="Current password"
              />
            </div>
            <div class="mb-6 flex flex-col lg:flex-row items-center">
              <label
                for="password"
                class="block mb-2 text-sm font-medium text-gray-900 w-64"
                >New password</label
              >
              <input
                type="password"
                id="password"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                required
                placeholder="New password"
              />
            </div>
            <div class="mb-6 flex flex-col lg:flex-row items-center">
              <label
                for="password"
                class="block mb-2 text-sm font-medium text-gray-900 w-64"
                >Confirm password</label
              >
              <input
                type="password"
                id="password"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                required
                placeholder="Re-enter new password"
              />
            </div>
            <button
              type="submit"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
          </form>
          <form class="border border-stone-200 px-5 pb-5 rounded">
            <p
              class="font-medium border-b border-stone-200 -mx-5 px-5 py-3 mb-5"
            >
              Other Settings
            </p>
            <div class="flex items-start mb-6">
              <div class="flex items-center h-5">
                <input
                  type="checkbox"
                  value=""
                  class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                  required
                />
              </div>
              <label
                class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >Email notifications</label
              >
            </div>
            <button
              type="submit"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  </AdminLayout>
</template>

<script lang="ts">
import AdminLayout from "../components/AdminLayout.vue";
export default {
  components: { AdminLayout },
};
</script>

<style></style>
