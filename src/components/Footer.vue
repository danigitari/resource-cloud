<template>
  <div class="footer bg-[#0146a1] relative bottom-0 max-w-screen">
    <div class="flex justify-around flex-wrap w-full px-10">
      <div class="lg:w-1/3 xs:w-full">
        <img src="/assets/logo.png" class="h-48 px-10" alt="" />
        <p class="text-white font-bold px-10 text-[20px]">
          <span class="pr-3"> RESOURCE CLOUD ACADEMY </span>
        </p>
        <div
          class="flex justify-left pt-10 px-10 gap-6 py-5 text-white text-[30px]"
        >
          <i class="fa-brands fa-slack icons"></i>
          <i class="fa-brands fa-twitter icons"></i>
          <i class="fa-brands fa-linkedin icons"></i>
        </div>
      </div>

      <div class="lg:w-1/3 sm:w-1/2 xs:w-full pt-10 pl-10">
        <p class="text-white py-5 text-xl xs:px-10">LINKS</p>
        <div class="py-2 text-gray-200 xs:px-10">
          <span class="pr-5"> Terms & Conditions </span>
        </div>
        <div class="py-2 text-gray-200 xs:px-10">
          <span class="pr-5"> Contact us </span>
        </div>
        <div class="py-2 text-gray-200 xs:px-10">
          <span class="pr-5"> FAQ's</span>
        </div>
        <div class="py-2 text-gray-200 xs:px-10">
          <span class="pr-5"> Privacy Policy</span>
        </div>
      </div>
      <div class="lg:w-1/3 sm:w-1/2 xs:w-full pt-10">
        <p class="text-white py-5 text-xl xs:px-10">GET IN TOUCH</p>
        <div class="py-2 text-gray-200 xs:px-10">
          <span class="font-bold pr-5"> Email : </span>
          resourcecloudacademy@gmail.com
        </div>
        <div class="py-2 text-gray-200 xs:px-10">
          <span class="font-bold pr-5"> Phone : </span> +254 740111615
        </div>
      </div>
    </div>

    <div class="px-20 py-10">
      <hr />
      <div class="flex justify-center items-center pt-10 text-white">
        Resource Cloud Academy ©2023
      </div>
    </div>
  </div>
</template>
<script>
import { useRouter } from "vue-router";
export default {
  setup() {
    const router = useRouter();

    return {
      router,
    };
  },
};
</script>
<style>
.icons {
  transition: all 0.3s ease-in;
}
.icons:hover {
  transform: scale(1.4);
}
.scroll-up {
  transition: 0.2s ease;
}
.scroll-up:hover {
  transform: scale(1.2);
}
</style>
