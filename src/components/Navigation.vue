<template>
  <header class="z-[20] max-w-screen shadow-md main">
    <nav class="bg-[#FDFEFF]">
      <div class="pl-10 flex justify-between items-center w-full h-full">
        <img src="/assets/logo.png" alt="" class="img" />

        <div class="w-full px-5 hidden md:flex justify-end">
          <router-link
            class="mx-5 hover:text-bg-blue-300 nav-title text-[#0146a1] font-semibold ease-in duration-200 hover:cursor-pointer w-32 flex flex-col items-center justify-center"
            to="/"
            >Home</router-link
          >
          <router-link
            class="mx-5 hover:text-bg-blue-300 nav-title text-[#0146a1] font-semibold ease-in duration-200 hover:cursor-pointer w-32 flex flex-col items-center justify-center"
            to="/about"
            >About</router-link
          >
          <router-link
            class="mx-5 hover:text-bg-blue-300 nav-title text-[#0146a1] font-semibold ease-in duration-200 hover:cursor-pointer w-32 flex flex-col items-center justify-center"
            to="/blog"
            >Blog
          </router-link>
          <!-- <router-link
            class="px-10 transition duration-300 ease-in text-[#0146a1]  nav-title font-semibold hover:text-bg-blue-300"
            to="/events"
            >Events</router-link
          > -->
        </div>

        <router-link
          class="shadow-lg px-[24px] rounded-md text-white py-2 mx-10 w-40 hidden md:flex bg-[#0146a1]"
          to="/contact"
        >
          Contact Us</router-link
        >

        <div class="hambuger-menu" @click.prevent="showHambugerMenu">
          <button
            class="block font-bold text-[24px] text-[#0146a1] w pr-10 md:hidden"
          >
            <i class="fa-solid fa-bars"></i>
          </button>
        </div>
      </div>
    </nav>
    <div class="hidden hambuger bg-white">
      <div class="flex flex-col text-[#0146a1]">
        <router-link to="/"
          ><div class="w-full flex justify-center items-center">
            Home
          </div></router-link
        >
        <router-link to="/about">
          <div class="w-full flex justify-center items-center">
            About
          </div></router-link
        >
        <router-link to="/contact">
          <div class="w-full flex justify-center items-center">
            Contact us
          </div></router-link
        >
      </div>
    </div>
  </header>
</template>
<script>
import { onMounted } from "vue";
export default {
  setup() {
    const showHambugerMenu = () => {
      const navbar = document.querySelector(".hambuger");
      navbar.classList.toggle("hambuger-menu-dropdown");
    };
    const toggleNavbarClass = () => {
      window.addEventListener("scroll", () => {
        const navbar = document.querySelector(".img");
        navbar.classList.toggle("imageHeightOnScroll", window.scrollY > 0);
        const main = document.querySelector(".img");
        main.classList.toggle('newHeight' , window.scrollY > 0)
      });
    };
    onMounted(() => {
      toggleNavbarClass();
    });

    return {
      showHambugerMenu,
      toggleNavbarClass,
    };
  },
};
</script>
<style>
* {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

.img {
  height: 110px;
  transition: all 0.3s ease;
}

.imageHeightOnScroll {
  height: 80px;
}

.navlink:hover {
  color: #fff;
}
.hambuger {
  transition: 1s ease-in;
}
.hambuger-menu-dropdown {
  display: block !important;
  font-size: 16px;
  transition: 1s ease-in;

}

.hambuger-menu-dropdown > div > a {
  border-bottom: 1px solid gray;
  font-size: 16px;
  transition: 0.2s ease-in;
  padding: 20px;
}
.hambuger-menu-dropdown > div > a:hover {
  background-color: #1762e2;
  color: #fff;
}
.contact {
  transition: all 0.5s ease;
}
.contact:hover {
  transform: scale(1.1);
}

.sticky {
  height: 70px !important;
}

@media (max-width: 480px) {
}
</style>
