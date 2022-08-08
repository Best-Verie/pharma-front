<template>
  <section class="py-10 px-10 xl:px-56">
    <h2 class="font-medium text-3xl mb-2 text-center capitalize">
      Latest news & blog
    </h2>
    <p class="text-zinc-500 text-lg text-center">
      Sed ut perspiciatis unde omnis iste natus error
    </p>
    <div
      class="articles mt-20 flex flex-col md:flex-row md:flex-wrap justify-between"
    >
      <div
        class="article border border-stone-300 w-max relative rounded mb-24 xl:mb-0 mx-auto"
      >
        <img src="../assets/img/article.jpg" alt="" class="w-80" />
        <div class="py-8 pl-10 w-80">
          <div class="flex items-center">
            <img
              src="../assets/icons/calendar.svg"
              alt="calendar icon"
              class="w-5 h-5"
            />
            <p class="text-stone-500 my-3 ml-3">25 AUG 2020</p>
          </div>
          <h4 class="text-xl font-semibold">
            Mirage Deep Dive Under anding Timin Response
          </h4>
          <p class="text-stone-500 my-5">
            Sedut perspiciatis unde omnis natus error sit voluptatem accusantium
          </p>
          <button
            class="border-b-2 border-b-black font-medium uppercase text-stone-500"
          >
            Read more +
          </button>
        </div>
      </div>
      <div
        class="article border border-stone-300 w-max relative rounded mb-24 xl:mb-0 mx-auto"
      >
        <img src="../assets/img/article.jpg" class="w-80" />
        <div class="py-8 pl-10 w-80">
          <div class="flex items-center">
            <img
              src="../assets/icons/calendar.svg"
              alt="calendar icon"
              class="w-5 h-5"
            />
            <p class="text-stone-500 my-3 ml-3">25 AUG 2020</p>
          </div>
          <h4 class="text-xl font-semibold">
            Mirage Deep Dive Under anding Timin Response
          </h4>
          <p class="text-stone-500 my-5">
            Sedut perspiciatis unde omnis natus error sit voluptatem accusantium
          </p>
          <button
            class="border-b-2 border-b-black font-medium uppercase text-stone-500"
          >
            Read more +
          </button>
        </div>
      </div>
      <div
        class="article border border-stone-300 w-max relative rounded mb-24 xl:mb-0 mx-auto"
      >
        <img src="../assets/img/article.jpg" class="w-80" />
        <div class="py-8 pl-10 w-80">
          <div class="flex items-center">
            <img
              src="../assets/icons/calendar.svg"
              alt="calendar icon"
              class="w-5 h-5"
            />
            <p class="text-stone-500 my-3 ml-3">25 AUG 2020</p>
          </div>
          <h4 class="text-xl font-semibold">
            Mirage Deep Dive Under anding Timin Response
          </h4>
          <p class="text-stone-500 my-5">
            Sedut perspiciatis unde omnis natus error sit voluptatem accusantium
          </p>
          <button
            class="border-b-2 border-b-black font-medium uppercase text-stone-500"
          >
            Read more +
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.article:after {
  content: "";
  width: 220px;
  border-top: 18px solid rgba(78, 151, 253, 0.2);
  position: absolute;
  top: -18px;
  left: -20px;
}

.article:before {
  content: "";
  height: 130px;
  position: absolute;
  border-left: 20px solid rgba(78, 151, 253, 0.2);
  left: -20px;
}

.article:hover {
  box-shadow: 0px 0px 10px rgba(141, 141, 141, 0.2);
  border: none;
}

.article:hover:after {
  content: "";
  width: 250px;
  border-top: 18px solid #4e97fd;
  position: absolute;
  top: -18px;
  left: -20px;
}

.article:hover:before {
  content: "";
  height: 130px;
  position: absolute;
  border-left: 20px solid #4e97fd;
  left: -20px;
}
</style>
