<template>
  <AdminLayout>
    <div
      class="flex flex-col xl:flex-row items-center justify-between p-10 w-2/3 border border-stone-200 mx-auto mt-20"
    >
      <img
        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60"
        alt=""
        class="w-1/3"
      />
      <div class="xl:w-3/6 mt-10 xl:mt-0">
        <p class="uppercase font-semibold">Jane Doe</p>
        <div class="flex mt-2">
          <div class="flex">
            <img src="../assets/icons/star-review.svg" class="w-5 h-5 mr-2" />
            <img src="../assets/icons/star-review.svg" class="w-5 h-5 mr-2" />
            <img src="../assets/icons/star-review.svg" class="w-5 h-5 mr-2" />
            <img src="../assets/icons/star-review.svg" class="w-5 h-5 mr-2" />
            <img src="../assets/icons/star.svg" class="w-5 h-5 mr-2" />
          </div>
          <p class="font-semibold text-stone-400">Review</p>
        </div>
        <p class="w-max mt-5">Product: Face mask</p>

        <div class="flex mt-10">
          <p class="font-semibold">Categories:</p>
          <p class="text-stone-400 ml-5">
            Mask, Covid -19, Sanitizer, Facemask
          </p>
        </div>
        <p class="text-stone-400 mt-5">
          On the other hand, we denounce with righteous indigna tion and dislike
          men who are so beguiled and demor Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Eum magnam quae iure veniam officia
          molestiae necessitatibus sequi nihil, cumque ipsum blanditiis
          veritatis dicta, placeat autem! Dignissimos repellendus aliquid dolor
          rerum.
        </p>
      </div>
    </div>
  </AdminLayout>
</template>

<script lang="ts">
import AdminLayout from "../components/AdminLayout.vue";
export default { components: { AdminLayout } };
</script>

<style></style>
