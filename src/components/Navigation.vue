<template>
  <header class="z-[20] max-w-screen shadow-md">
    <nav class=" bg-[#FDFEFF]">
      <div class="pl-10 flex justify-between items-center w-full">
        <img src="/assets/logo.png" alt="" class="h-32" />

        <div class="w-full px-5 hidden md:flex justify-end">
          <router-link
            class="px-10 transition duration-300 ease-in text-[#0146a1]  nav-title font-semibold hover:text-bg-blue-300 w-32 mx-5"
            to="/"
            >Home</router-link
          >
          <router-link
            class="px-10 transition duration-300 ease-in text-[#0146a1]  nav-title font-semibold hover:text-bg-blue-300 w-32 mx-5"
            to="/about"
            >About</router-link
          >
          <router-link
            class="px-10 transition duration-300 ease-in text-[#0146a1]  nav-title font-semibold hover:text-bg-blue-300 w-32 mx-5"
            to="/blog"
            >Blog
          </router-link>
          <!-- <router-link
            class="px-10 transition duration-300 ease-in text-[#0146a1]  nav-title font-semibold hover:text-bg-blue-300"
            to="/events"
            >Events</router-link
          > -->
        </div>

        <router-link  class="shadow-lg px-[24px] w-40 rounded-md text-white py-2 mx-10 hidden md:flex bg-[#0146a1] " to="/contact"> Contact Us</router-link>  

        <div class="hambuger-menu" @click.prevent="showHambugerMenu">
          <button
            class="block font-bold text-[24px] text-[#0146a1] w pr-10 md:hidden"
          >
            <i class="fa-solid fa-bars"></i>
          </button>
        </div>
      </div>
    </nav>
    <div class="hidden hambuger block">
      <div class="flex flex-col text-[#0146a1] ">
        <router-link to="/home"
          ><div class="w-full flex justify-center items-center">
            Home
          </div></router-link
        >
        <router-link to="/home">
          <div class="w-full flex justify-center items-center">
            About
          </div></router-link
        >
        <router-link to="/home">
          <div class="w-full flex justify-center items-center">
            Contact us
          </div></router-link
        >
        <!-- <router-link to="/home"></router-link> 
      <router-link to="/home"></router-link>  -->
      </div>
    </div>
  </header>
</template>
<script>
export default {
  setup() {
    const showHambugerMenu = () => {
      const navbar = document.querySelector(".hambuger");
      navbar.classList.toggle("hambuger-menu-dropdown");
    };

    return {
      showHambugerMenu,
    };
  },
};
</script>
<style>
* {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
nav {
  display: flex;
  position: fixed;
  justify-content: space-around;
  font-style: normal;
  width: 100%;
  /* transition: all .5s ease; */
}
nav a {
  text-decoration: none;
  font-style: normal;
}
nav ul {
  display: flex;
  justify-content: center;
}

nav ul > li {
  padding: 20px;
  padding-left: 25px;
  padding-right: 25px;
  font-weight: 400;
  font-size: 17px;
  font-style: normal;
  transition: 0.2s ease;
}
nav ul li i {
  font-size: 11px;
}
nav ul li:hover {
  background-color: #1762e2;
}
.test-dropdown {
  position: relative;
}
.services:hover .text {
  color: #fff;
}

.test-dropdown p {
  display: inline;
}
.test-dropdown-menu {
  top: calc(100% + 20px);
  position: absolute;
  z-index: 5;
  background-color: #fff;
  width: 300px;
  border-top: 4px solid blue;
  left: -25px;
  display: none;
}
.services:hover .test-dropdown-menu {
  display: block;
}
.test-dropdown-menu > div {
  padding: 20px;
  border-bottom: 1px solid gray;
  font-size: 16px;
  transition: 0.3s ease-in;
}

.test-dropdown-menu > div:hover {
  background: #1762e2;
  color: #fff;
}
.test-daas-dropdown {
  position: relative;
}
.test-daas-dropdown-menu {
  position: absolute;
  top: 0px;
  left: 300px;
  display: none;
}
.test-daas-dropdown:hover .test-daas-dropdown-menu {
  display: block;
  z-index: 10;
}

.test-daas-dropdown-menu div {
  background-color: #fff;
  width: 200px;
  border-bottom: 1px solid grey;
  padding: 20px;
}
.test-daas-dropdown-menu div:hover {
  background-color: #1762e2;
  color: #fff !important;
}
.test-daas-dropdown-menu div {
  color: black;
}
.navlink:hover {
  color: #fff;
}
.hambuger-menu-dropdown {
  display: block !important;
  font-size: 16px;
  transition: 0.4s ease-in;
}
.hambuger-menu-dropdown > div > div {
  border-bottom: 1px solid gray;
  font-size: 16px;
  transition: 0.2s ease-in;
  padding: 20px;
}
.hambuger-menu-dropdown > div > div:hover {
  background-color: #1762e2;
  color: #fff;
}
.contact {
  transition: all 0.5s ease;
}
.contact:hover {
  transform: scale(1.1);
}
@media (max-width: 480px) {
}
</style>
