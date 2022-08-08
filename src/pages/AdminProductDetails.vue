<template>
  <AdminLayout>
    <div
      class="
        flex flex-col
        xl:flex-row
        items-center
        justify-between
        p-10
        w-2/3
        border border-stone-200
        mx-auto
        mt-20
      "
    >
      <div class="flex justify-between flex-wrap text-sm mr-10">
        <div class="mb-5">
          <img
            :src="`${
              filePreview ? filePreview : '../assets/img/facemasks.png'
            }`"
            alt=""
            class="w-40 h-30 mb-5"
          />
          <p class="w-52">Product name: {{ product.StoreProductName }}</p>
        </div>

        <div class="flex justify-center mt-8">
          <div class="max-w-2xl rounded-lg shadow-xl bg-gray-50">
            <div class="m-4">
              <label class="inline-block mb-2 text-gray-500">File Upload</label>
              <div class="flex items-center justify-center w-full">
                <label
                  class="
                    flex flex-col
                    w-full
                    h-32
                    border-4 border-blue-200 border-dashed
                    hover:bg-gray-100 hover:border-gray-300
                  "
                >
                  <div class="flex flex-col items-center justify-center pt-7">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-8 h-8 text-gray-400 group-hover:text-gray-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      />
                    </svg>
                    <p
                      class="
                        pt-1
                        text-sm
                        tracking-wider
                        text-gray-400
                        group-hover:text-gray-600
                      "
                    >
                      Attach a file
                    </p>
                  </div>
                  <input
                    type="file"
                    class="opacity-0"
                    @change="handleInputChange"
                  />
                </label>
              </div>
            </div>
            <div class="flex justify-center p-2">
              <button
                class="
                  w-full
                  px-4
                  py-2
                  text-white
                  bg-blue-500
                  rounded
                  shadow-xl
                "
                @click="handleSubmit"
              >
                SUBMIT
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </AdminLayout>
</template>

<script lang="ts">
import AdminLayout from "../components/AdminLayout.vue";
import { ref, watchEffect } from "vue";
import { getBase64, singleUploadImage } from "../utils/uploader";
import { useToast } from "vue-toast-notification";
import "vue-toast-notification/dist/theme-default.css";

export default {
  components: { AdminLayout },
  setup() {
    const $toast = useToast();
    const imageFileList = ref();
    const filePreview = ref();

    const product = JSON.parse(
      localStorage.getItem("tercera_selectedProduct") || "{}"
    );
    const handleInputChange = (e: any) => {
      imageFileList.value = e.target.files[0];
    };

    watchEffect(async () => {
      if (imageFileList.value) {
        filePreview.value = await getBase64(imageFileList.value);
        const imageExtension = imageFileList.value.name.split(".")[1];
        imageFileList.value = new File(
          [imageFileList.value],
          `${product.HESKU}.${imageExtension}`,
          { type: "image/png" }
        );
      }
    });

    const handleSubmit = async () => {
      try {
        await singleUploadImage(imageFileList.value);
        $toast.success(`Image has been updated successfully`, {
          position: "top-right",
          duration: 4000,
        });
      } catch (error) {
        console.log(error);
      }
    };

    return {
      product,
      handleInputChange,
      handleSubmit,
      filePreview,
    };
  },
};
</script>

<style></style>
