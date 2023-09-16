<template>
  <div class="footer bg-[#0146a1] relative bottom-0 w-full">
    <div class="flex justify-around flex-wrap w-full px-10">
      <div class="lg:w-1/3 sm:w-1/2 xs:w-full pt-10">
        <img src="rcalogo2.jpg" class="h-32 px-10 my-5" alt="" />
        <p class="text-white font-bold px-10 text-[20px]">
        <span class="pr-3"> RESOURCE </span> <span class="pr-3">CLOUD </span>ACADEMY
        </p>
        <div
          class="flex justify-left pt-10 px-10 gap-6 py-5 text-white text-[30px] "
        >
          <i class="fa-brands fa-slack icons"></i>
          <i class="fa-brands fa-twitter icons"></i>
          <i class="fa-brands fa-linkedin icons"></i>
        </div>
      </div>

      <div class="lg:w-1/5 pt-10">
        <p class="text-white py-5 text-xl xs:px-10">SUPPORT</p>
        <router-link to="about-us" class="py-2 text-gray-200 xs:px-10 block"
          >About us</router-link
        >
        <router-link to="contact-us" class="py-2 text-gray-200 xs:px-10 block"
          >Contact us</router-link
        >
        <router-link to="faq" class="py-2 text-gray-200 xs:px-10 block"
          >Faq</router-link
        >
      </div>
      <div class="lg:w-2/10 pt-10">
        <p class="text-white py-5 text-xl xs:px-10">GET IN TOUCH</p>
        <div class="py-2 text-gray-200 xs:px-10">
          <span class="font-bold pr-5"> Email : </span> resourcecloud@gmail.com
        </div>
        <div class="py-2 text-gray-200 xs:px-10">
          <span class="font-bold pr-5"> Phone : </span> +254 7111 111
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
