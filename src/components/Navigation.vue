<template>
  <header>
    <nav class="ml-10">
      <div class="flex justify-between items-center w-full">
        <div class="bg-white">
          <img src="../assets/rcalogo.jpg" alt="" class="h-16 px-10 my-4 p-1" />
        </div>

        <div class="flex-1 p-5 flex justify-end">
          <router-link class="px-10 transition duration-300 ease-in nav-title font-semibold hover:text-[#0146a1]" to="/">Home</router-link>
          <router-link class="px-10 transition duration-300 ease-in nav-title font-semibold hover:text-[#0146a1]" to="/about">About</router-link>
          <router-link class="px-10 transition duration-300 ease-in nav-title font-semibold hover:text-[#0146a1]" to="/blog">Blog </router-link>
          <router-link class="px-10 transition duration-300 ease-in nav-title font-semibold hover:text-[#0146a1]" to="/events">Events</router-link>
        </div>

        <button class="bg-[#0146a1] px-[24px] rounded-md text-white py-2 mx-10">
          Contact Us
        </button>


      </div>
    </nav>
  </header>
</template>
