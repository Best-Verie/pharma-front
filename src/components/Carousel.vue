<template>
  <section class="bg-zinc-50 mt-10 py-10">
    <h2 class="font-medium text-3xl mb-2 text-center">What Our Client’s Say</h2>
    <p class="text-zinc-500 text-lg text-center">
      Sed ut perspiciatis unde omnis iste natus error
    </p>
    <div class="px-0 xl:px-40">
      <swiper
        :navigation="true"
        :pagination="{ clickable: true }"
        :modules="modules"
        class="mySwiper"
        :space-between="100"
        :breakpoints="swiperOptions.breakpoints"
      >
        <swiper-slide class="py-14 px-16 flex flex-col">
          <div class="flex justify-between w-full items-center mb-10">
            <img
              src="../assets/img/testimony.png"
              alt="profile picture"
              class="w-20 h-20"
            />
            <div class="flex">
              <img
                src="../assets/icons/star-review.svg"
                alt="star"
                class="w-7 h-7 mt-2 ml-2"
              />
              <img
                src="../assets/icons/star-review.svg"
                alt="star"
                class="w-7 h-7 mt-2 ml-2"
              />
              <img
                src="../assets/icons/star-review.svg"
                alt="star"
                class="w-7 h-7 mt-2 ml-2"
              />
              <img
                src="../assets/icons/star-review.svg"
                alt="star"
                class="w-7 h-7 mt-2 ml-2"
              />
              <img
                src="../assets/icons/star-review.svg"
                alt="star"
                class="w-7 h-7 mt-2 ml-2"
              />
            </div>
          </div>
          <p class="text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
            quo totam laudantium enim sed magnam obcaecati nam, deleniti vitae
            odio voluptatibus porro, inventore placeat at! Ex minus minima
            exercitationem quasi.
          </p>

          <div
            class="w-full text-left mt-7 border-l-4 border-l-blue-500 -ml-32"
          >
            <p class="font-bold pl-16">John Doe</p>
            <p class="text-orange-500 font-medium pl-16">Business manager</p>
          </div>
        </swiper-slide>
        <swiper-slide class="py-14 px-16 flex flex-col">
          <div class="flex justify-between w-full items-center mb-10">
            <img
              src="../assets/img/testimony.png"
              alt="profile picture"
              class="w-20 h-20"
            />
            <div class="flex">
              <img
                src="../assets/icons/star-review.svg"
                alt="star"
                class="w-7 h-7 mt-2 ml-2"
              />
              <img
                src="../assets/icons/star-review.svg"
                alt="star"
                class="w-7 h-7 mt-2 ml-2"
              />
              <img
                src="../assets/icons/star-review.svg"
                alt="star"
                class="w-7 h-7 mt-2 ml-2"
              />
              <img
                src="../assets/icons/star-review.svg"
                alt="star"
                class="w-7 h-7 mt-2 ml-2"
              />
              <img
                src="../assets/icons/star-review.svg"
                alt="star"
                class="w-7 h-7 mt-2 ml-2"
              />
            </div>
          </div>
          <p class="text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
            quo totam laudantium enim sed magnam obcaecati nam, deleniti vitae
            odio voluptatibus porro, inventore placeat at! Ex minus minima
            exercitationem quasi.
          </p>

          <div
            class="w-full text-left mt-7 border-l-4 border-l-blue-500 -ml-32"
          >
            <p class="font-bold pl-16">John Doe</p>
            <p class="text-orange-500 font-medium pl-16">Business manager</p>
          </div>
        </swiper-slide>
        <swiper-slide class="py-14 px-16 flex flex-col">
          <div class="flex justify-between w-full items-center mb-10">
            <img
              src="../assets/img/testimony.png"
              alt="profile picture"
              class="w-20 h-20"
            />
            <div class="flex">
              <img
                src="../assets/icons/star-review.svg"
                alt="star"
                class="w-7 h-7 mt-2 ml-2"
              />
              <img
                src="../assets/icons/star-review.svg"
                alt="star"
                class="w-7 h-7 mt-2 ml-2"
              />
              <img
                src="../assets/icons/star-review.svg"
                alt="star"
                class="w-7 h-7 mt-2 ml-2"
              />
              <img
                src="../assets/icons/star-review.svg"
                alt="star"
                class="w-7 h-7 mt-2 ml-2"
              />
              <img
                src="../assets/icons/star-review.svg"
                alt="star"
                class="w-7 h-7 mt-2 ml-2"
              />
            </div>
          </div>
          <p class="text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
            quo totam laudantium enim sed magnam obcaecati nam, deleniti vitae
            odio voluptatibus porro, inventore placeat at! Ex minus minima
            exercitationem quasi.
          </p>

          <div
            class="w-full text-left mt-7 border-l-4 border-l-blue-500 -ml-32"
          >
            <p class="font-bold pl-16">John Doe</p>
            <p class="text-orange-500 font-medium pl-16">Business manager</p>
          </div>
        </swiper-slide>
        <swiper-slide class="py-14 px-16 flex flex-col">
          <div class="flex justify-between w-full items-center mb-10">
            <img
              src="../assets/img/testimony.png"
              alt="profile picture"
              class="w-20 h-20"
            />
            <div class="flex">
              <img
                src="../assets/icons/star-review.svg"
                alt="star"
                class="w-7 h-7 mt-2 ml-2"
              />
              <img
                src="../assets/icons/star-review.svg"
                alt="star"
                class="w-7 h-7 mt-2 ml-2"
              />
              <img
                src="../assets/icons/star-review.svg"
                alt="star"
                class="w-7 h-7 mt-2 ml-2"
              />
              <img
                src="../assets/icons/star-review.svg"
                alt="star"
                class="w-7 h-7 mt-2 ml-2"
              />
              <img
                src="../assets/icons/star-review.svg"
                alt="star"
                class="w-7 h-7 mt-2 ml-2"
              />
            </div>
          </div>
          <p class="text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
            quo totam laudantium enim sed magnam obcaecati nam, deleniti vitae
            odio voluptatibus porro, inventore placeat at! Ex minus minima
            exercitationem quasi.
          </p>

          <div
            class="w-full text-left mt-7 border-l-4 border-l-blue-500 -ml-32"
          >
            <p class="font-bold pl-16">John Doe</p>
            <p class="text-orange-500 font-medium pl-16">Business manager</p>
          </div>
        </swiper-slide>
        <swiper-slide class="py-14 px-16 flex flex-col">
          <div class="flex justify-between w-full items-center mb-10">
            <img
              src="../assets/img/testimony.png"
              alt="profile picture"
              class="w-20 h-20"
            />
            <div class="flex">
              <img
                src="../assets/icons/star-review.svg"
                alt="star"
                class="w-7 h-7 mt-2 ml-2"
              />
              <img
                src="../assets/icons/star-review.svg"
                alt="star"
                class="w-7 h-7 mt-2 ml-2"
              />
              <img
                src="../assets/icons/star-review.svg"
                alt="star"
                class="w-7 h-7 mt-2 ml-2"
              />
              <img
                src="../assets/icons/star-review.svg"
                alt="star"
                class="w-7 h-7 mt-2 ml-2"
              />
              <img
                src="../assets/icons/star-review.svg"
                alt="star"
                class="w-7 h-7 mt-2 ml-2"
              />
            </div>
          </div>
          <p class="text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
            quo totam laudantium enim sed magnam obcaecati nam, deleniti vitae
            odio voluptatibus porro, inventore placeat at! Ex minus minima
            exercitationem quasi.
          </p>

          <div
            class="w-full text-left mt-7 border-l-4 border-l-blue-500 -ml-32"
          >
            <p class="font-bold pl-16">John Doe</p>
            <p class="text-orange-500 font-medium pl-16">Business manager</p>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<script lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperOptions: {
        breakpoints: {
          320: {
            slidesPerView: 1,
            spaceBetween: 50,
          },
          770: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
        },
      },
    };
  },
  setup() {
    return {
      modules: [Navigation, Pagination],
    };
  },
};
</script>

<style>
.swiper {
  width: 100%;
  height: 100%;
  padding: 3rem 5rem;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

@media (max-width: 375px) {
  .swiper {
    padding: 1rem 0.7rem;
  }
  .swiper-slide {
    width: 350px !important;
  }
}

.swiper-pagination {
  top: 35rem;
}

.swiper-wrapper {
  padding: 2rem 1rem;
}
</style>
